import React from 'react';

function CreateDiscussion() {
    return (
      <div className="mx-auto text-black">
        <div className="relative isolate overflow-hidden px-6 py-10 shadow bg-[#FFE7B9]">
          
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Keep Updated
          </h2>
  
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8">
            Keep pace with Hotel advancements! Join our mailing list for selective, noteworthy updates.
          </p>
  
          <form className="mx-auto mt-10 flex max-w-md gap-x-4 ">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input 
              id="email-address" 
              name="email" 
              type="email" 
              autoComplete="email" 
              required 
              className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-white shadow-sm  sm:text-sm sm:leading-6" 
              placeholder="Enter your email" 
            />
  
            <button 
              type="submit" 
              className="flex-none rounded-md bg-[#cca353] px-3.5 py-2.5 text-sm font-semibold border-0 text-white shadow-sm hover:bg-[#a7874b]"
            >
              Notify me
            </button>
          </form>
  
        </div>
      </div>
    );
  }

export default CreateDiscussion;