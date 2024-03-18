import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import axios from "axios";
import { IconContext } from "react-icons";
import { IoIosCheckmarkCircle, IoIosCloseCircle, IoIosCreate } from "react-icons/io";

import DiscussionPost from "../DiscussionPost/DiscussionPost";
import { login } from '../../store/slices/authSlices';

import profile from "../../assets/profile-circle.svg";

const Account = () => {
  // Access redux store state.
  const { user } = useSelector((state) => state.auth);

  // States to render post data.
  const [posts, setPosts] = useState([]);
  const [filterDate, setFilterDate] = useState("");
  const [displayDate, setDisplayDate] = useState("");
  const [reverseOrder, setReverseOrder] = useState(false);
  const [state, setState] = useState();

  // States to render account details and editing forms.
  const [initial, setInitial] = useState(user.userName);
  const [username, setUsername] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [showEdit, setShowEdit] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Dispatch for updating the redux store state for username changes.
  const dispatch = useDispatch();

  // Re-renders based on redux state and whether or not changes have been made to post data.
  useEffect(() => {
    setInitial(user.userName);

    // Fetch sightings data from backend when component mounts
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        const allPosts = response.data.result;
        const userPosts = allPosts.filter((post) => post.email === user.email);
        setPosts(userPosts); // Set only user's posts
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
    // Set the initial value of filterDate to the current date
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Month starts from 0
    const day = currentDate.getDate().toString().padStart(2, "0");
    const dayAfter = (currentDate.getDate() + 1).toString().padStart(2, "0");
    setFilterDate(`${year}-${month}-${dayAfter}`);
    setDisplayDate(`${year}-${month}-${day}`);
  }, [user, state]);

  const updatePosts = (reqBody) => {
    fetch("http://localhost:3000/posts", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: reqBody
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error("An error occurred updating the posts.");
      }
      return res.json();
    })
    .then(() => {
      console.log("Sucessfully updated username on posts.");
      setState(reqBody);
    })
    .catch((err) => {
      toast.error(err.message);
    }); 
  }

  // Handles the date filter for post data.
  const handleFilterChange = (e) => {
    const year = e.target.value.slice(0, 4);
    const month = e.target.value.slice(5, 7);
    const day = e.target.value.slice(8, 10);
    const dayAfter = String(Number(day) + 1);
    setDisplayDate(e.target.value);
    setFilterDate(`${year}-${month}-${dayAfter}`);
  };

  const handleReverseOrder = () => {
    setReverseOrder(!reverseOrder); // Toggle the state to reverse the order
  };

  const handleAvatar = () => {
    console.log("Changing profile picture...");
  };

  const handleSubmit = (data) => {
    data.preventDefault();
    const newUsername = data.target.username.value;
    const userReq = JSON.stringify({
      "email": user.email,
      "username": initial,
      "newUsername": newUsername
    });

    fetch("http://localhost:3000/signup", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: userReq
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error("An error occurred while updating username.");
      }
      return res.json();
    })
    .then(() => {
      toast.success("Username successfully changed.");
      dispatch(login({
        userName: newUsername,
        email: user.email
      }));
      updatePosts(JSON.stringify({
        "email": user.email,
        "newUsername": newUsername
      }));
    })
    .catch((err) => {
      toast.error(err.message);
    })
    .finally(() => {
      endEdit();
    });
  }

  const handleEscape = (e) => {
    if (e.key === "Escape") {
      setShowConfirmation(false);
    }
  };

  const filteredPosts = posts.filter(
    (post) => new Date(post.date) <= new Date(filterDate)
  );

  // Shows and hides elements for editing the username form.
  const editUsername = () => {
    setUsername("");
    setDisabled(!disabled);
    setShowEdit(!showEdit);
  };

  // Shows and hides elements for editing the username form.
  const endEdit = () => {
    setUsername("");
    setDisabled(!disabled);
    setShowEdit(!showEdit);
    setShowConfirmation(false);
  };

  return (
    <div onKeyDown={handleEscape}>
      {/* Background image for the page. */}
      <div
        className='absolute w-screen h-[30rem] bg-black opacity-[85%] bg-no-repeat 
          bg-cover bg-center z-0 bg-[url("https://www.celebritycruises.com/blog/content/uploads/2020/05/best-place-to-see-orcas-vancouver-canada.jpg")]'
      />
      <form onSubmit={handleSubmit}>
        {showConfirmation == true ? (
          <div className="flex flex-col items-center">
            <div className="fixed top-0 h-[100vh] w-[100vw] bg-black opacity-[75%] z-10" />
            <div className="fixed flex flex-col items-center top-[35%] z-20 bg-gray-50 p-0 rounded-[5%] shadow-2xl">
              <p className="text-black mt-7 border-t-2 pl-10 pr-10 pt-2">
                Are you sure you want to change your username to {username}?
              </p>
              <div className="flex space-x-6 m-5">
                <button
                  className="transition duration-150 hover:scale-[1.1] bg-blue-500 border-0"
                  type="submit"
                >
                  Yes
                </button>
                <button
                  className="transition duration-150 hover:scale-[1.1] bg-gray-50 text-gray-500 border-black border-[1px]"
                  type="button" onClick={() => {
                    setShowConfirmation(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : null}
        {/* Container for page header, avatar, and username form. */}
        <div className="flex flex-col pb-[30px] mb-[30px]">
          {/* Container for avatar and page header */}
          <div className="m-0 mt-[150px] h-[250px] font-bold flex flex-row z-[1] ">
            <div className=" flex-1 self-center " />{" "}
            {/* Flex item for spacing */}
            {/* User's avatar */}
            <div className="flex-1 self-center">
              {/* Flex item for spacing */}
              {" "}
              <img
                className="w-[256px] min-w-0 rounded-[100%] p-0 cursor-pointer"
                src={profile}
                onClick={handleAvatar}
              />
            </div>
            {/* Page Header */}
            <p
              className='text-[#0F1035] font-["Lato","sans-serif"] text-[42px] 
                      text-center font-bold self-end mb-[25px] flex-1 drop-shadow-[0_0_8px_white]'
            >
              Account
            </p>
            <div className="flex-1 self-center" /> {/* Flex item for spacing */}
            <div className="flex-1 self-center" /> {/* Flex item for spacing */}
          </div>
          {/* Following form contains elements to edit the user's username using states. */}
          <div
            className='flex flex-row justify-center font-["Inter"] not-italic font-[500] 
                  text-[30px] leading-[150%] tracking-[-0.011em] z-[1] text-black '
          >
            Username:&nbsp;
            <input
              className='bg-[#f2f6fa] w-[30rem] h-[3rem] font-["Inter"] 
                      not-italic font-[500] text-center text-[#292929]'
              value={username}
              type="text"
              placeholder={initial}
              name="username"
              disabled={disabled}
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* Shows the "Edit" button to initiate username editing */}
            {showEdit ? (
              <>
                <button
                  className="py-0 px-2.5 m-2 mr-0 rounded-[100%] border-0
                          bg-transparent drop-shadow-[0_0_4px_white]"
                  onClick={editUsername}
                >
                  <IconContext.Provider value={{ color: "black" }}>
                    <IoIosCreate />
                  </IconContext.Provider>
                </button>
                <div className="w-[50px] h-7 m-2 mr-0" />
              </>
            ) : null}
            {/* Shows the "Confirm" and "Cancel" buttons to set or cancel changes */}
            {!showEdit ? (
              <>
                <button
                  type="button"
                  className="py-0 px-2.5 m-2 mr-0 border-0 
                          drop-shadow-[0_0_4px_white]"
                  onClick={() => {
                    username === "" ? (
                      toast.error("Username cannot be blank.")
                    ) : (
                      setShowConfirmation(true)
                    )
                  }}
                >
                  <IconContext.Provider value={{ color: "green" }}>
                    <IoIosCheckmarkCircle />
                  </IconContext.Provider>
                </button>
                <button
                  type="button"
                  className="py-0 px-2.5 m-2 mr-0 border-0 
                          drop-shadow-[0_0_4px_white]"
                  onClick={endEdit}
                >
                  <IconContext.Provider value={{ color: "red" }}>
                    <IoIosCloseCircle />
                  </IconContext.Provider>
                </button>
              </>
            ) : null}
          </div>
          <br /> {/* Flex item for spacing */}
          <br /> {/* Flex item for spacing */}
        </div>
      </form>
      <h1
        className='text-[#0F1035] text-[38px] 
        text-center font-bold self-end mb-[25px] flex-1"'
      >
        Your Posts
      </h1>
      {/* Button to filter  */}
      <form className="">
        <label
          htmlFor="filterDate"
          className="text-gray-700 ml-2 md:ml-[345px]"
        >
          Filter through Date:{" "}
        </label>
        <input
          className="text-gray-700 dark:bg-white"
          type="date"
          id="displayDate"
          name="displayDate"
          value={displayDate}
          onChange={handleFilterChange}
        />
      </form>
      <div className="mt-6"></div>
      <button
        onClick={handleReverseOrder}
        className="block w-36 h-10 text-black text-sm bg-white p-12px rounded-2rem font-bold text-decoration-none border border-gray-700 ml-2 md:ml-[345px]
            active:bg-gray-100 transition duration-150 hover:scale-[1.1]"
      >
        Reverse Order
      </button>
      <div className="mt-6"></div>
      {reverseOrder
        ? filteredPosts.map((post) => (
            <DiscussionPost
              key={post._id} // Assuming sighting objects have a unique identifier like _id
              id={post._id}
              email={post.email}
              username={post.user}
              lat={post.lat}
              long={post.long}
              time={post.time}
              date={post.date}
              description={post.description}
              image={post.image}
              setState={setState}
            />
          ))
        : filteredPosts
            .slice()
            .reverse()
            .map((post) => (
              <DiscussionPost
                key={post._id} // Assuming sighting objects have a unique identifier like _id
                id={post._id}
                email={post.email}
                username={post.user}
                lat={post.lat}
                long={post.long}
                time={post.time}
                date={post.date}
                description={post.description}
                image={post.image}
                setState={setState}
              />
            ))}
    </div>
  );
};

export default Account;
