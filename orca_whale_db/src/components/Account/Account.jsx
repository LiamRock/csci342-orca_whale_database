import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import React from 'react';
import axios from 'axios';

import CreateDiscussion from '../CreateDiscussion/CreateDiscussion';
import DiscussionPost from '../DiscussionPost/DiscussionPost';

import profile from '../../assets/profile-circle.svg';
import editIco from '../../assets/edit-pen.svg';
import confirm from '../../assets/checkmark.png';
import cancel from '../../assets/cancel.png';


const Account = () => {
    const { user } = useSelector((state) => state.auth);
    const [posts, setPosts] = useState([]);
    const [filterDate, setFilterDate] = useState('');
    const [reverseOrder, setReverseOrder] = useState(false);

    const [username, setUsername] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [showEdit, setShowEdit] = useState(true);
    const [showSave, setShowSave] = useState(false);
    const [initial, setInitial] = useState(username);

    const changePicture = () => {
        console.log('Changing profile picture...');
    }

    useEffect(() => {
        setUsername(user.userName);
        setInitial(user.userName);

         // Fetch sightings data from backend when component mounts
         axios.get('http://localhost:3000/posts')
         .then(response => {
           console.log(response.data.result);
           const allPosts = response.data.result;
           const userPosts = allPosts.filter(post => post.user === user.userName);
           setPosts(userPosts); // Set only user's posts
         })
         .catch(error => {
             console.error('Error fetching posts:', error);
         });
         // Set the initial value of filterDate to the current date
         const currentDate = new Date();
         const year = currentDate.getFullYear();
         const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month starts from 0
         const day = currentDate.getDate().toString().padStart(2, '0');
         const formattedDate = `${year}-${month}-${day}`;
         setFilterDate(formattedDate);
    }, [user]);

    const handleFilterChange = (e) => {
        setFilterDate(e.target.value);
       };
     
       const handleReverseOrder = () => {
         setReverseOrder(!reverseOrder); // Toggle the state to reverse the order
     };
     
       const filteredPosts = posts.filter(post => new Date(post.date) <= new Date(filterDate));


    const editUsername = () => {
        setInitial(username);
        setUsername('');
        setDisabled(!disabled);
        setShowEdit(!showEdit);
        setShowSave(!showSave);
    }
    
    const cancelEdit = () => {
        setUsername(initial);
        setDisabled(!disabled);
        setShowEdit(!showEdit);
        setShowSave(!showSave);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setInitial(username);
        setDisabled(!disabled);
        setShowEdit(!showEdit);
        setShowSave(!showSave);
    }

    return (
        <>
        <div className='absolute w-screen h-[30rem] bg-black bg-opacity-85 bg-no-repeat bg-cover bg-center z-0 bg-[url("https://www.celebritycruises.com/blog/content/uploads/2020/05/best-place-to-see-orcas-vancouver-canada.jpg")]'/>
        <div className='flex flex-col pb-[30px]'>
            {/* Following div contains profile picture and heading. Clicking on profile picture
                allows user to modify their profile picture. */}
            <div className='m-0 mt-[150px] h-[250px] font-bold flex flex-row z-[1] '>
                <div className=' flex-1 self-center '/>
                <div className='flex-1 self-center'>
                    <img className='w-[256px] min-w-0 rounded-[100%] p-0 cursor-pointer' src={profile} onClick={changePicture}/>
                </div>   
                <p className='text-[#0F1035] font-["Lato","sans-serif"] text-[42px] text-center font-bold self-end mb-[25px] flex-1 '>Account</p>
                <div className='flex-1 self-center'/>
                <div className='flex-1 self-center'/>
            </div>
            {/* Following form contains elements to edit the user's username using states. */}
            <form className='flex flex-row justify-center font-["Inter"] not-italic font-[500] text-[30px] leading-[150%] tracking-[-0.011em] z-[1] text-black ' onSubmit={handleSubmit}>
                Username:&nbsp;<input className='bg-[#f2f6fa] w-[30rem] h-[3rem] font-["Inter"] not-italic font-[500] text-5 tracking-[-0.011em] text-center text-[#292929]' value={username} disabled={disabled} 
                onChange={(event) => setUsername(event.target.value)}
                />
                {showEdit ? <>
                <button className='py-0 px-2.5 m-2 mr-0 rounded-[100%] border-0 self-center bg-transparent' onClick={editUsername}><img className='w-5 h-5' src={editIco} alt='Edit username'/></button>
                <div className='w-10 h-5 m-2 mr-0'/>
                </>
                : null}
                {showSave ? <>
                    <button className='py-0 px-2.5 m-2 mr-0 rounded-[100%] border-0 self-center bg-transparent' type='submit'><img className='w-5 h-5' src={confirm} alt='Confirm username'/></button>
                    <button className='py-0 px-2.5 m-2 mr-0 rounded-[100%] border-0 self-center bg-transparent' onClick={cancelEdit}><img className='w-5 h-5' src={cancel} alt='Stop editing username'/></button>
                </>
                : null}
            </form>

            
            <br/><br/>
        </div>
        <div className='mb-[30px]'>
            <CreateDiscussion/>
        </div>
        <form>
          <label htmlFor="filterDate" className="text-gray-700 ml-2 md:ml-[345px]">Filter up to a Date: </label>
          <input className="text-gray-700" type="date" id="filterDate" name="filterDate" value={filterDate} onChange={handleFilterChange} />
        </form>
        <div className="mt-6"></div>
        <button
        onClick={handleReverseOrder}
        className="block w-36 h-10 text-black text-sm bg-white p-12px rounded-2rem font-bold text-lg text-decoration-none border border-gray-700 ml-2 md:ml-[345px]
        active:bg-gray-100"
        >
          Reverse Order
        </button>
        <div className="mt-6"></div>
        {reverseOrder ? (
          filteredPosts.map(post => (
                  <DiscussionPost
                      key={post._id} // Assuming sighting objects have a unique identifier like _id
                      username={post.user}
                      lat={post.lat}
                      long={post.long}
                      time={post.time}
                      date={post.date}
                      description={post.description}
                      image={post.image}
                  />
          ))
          ) : (
            filteredPosts.slice().reverse().map(post => (
              <DiscussionPost
                  key={post._id} // Assuming sighting objects have a unique identifier like _id
                  username={post.user}
                  lat={post.lat}
                  long={post.long}
                  time={post.time}
                  date={post.date}
                  description={post.description}
                  image={post.image}
              />
          ))
        )}
        </>
    )
}

export default Account;