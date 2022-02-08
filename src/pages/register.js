import React from 'react';
import Breadcrumb from '../component/breadcrumb/Breadcrumb';
const Register=()=>{
    return(
        <>
        <Breadcrumb heading="Register"/>
        <div className="min-h-screen   relative z-10 bg-gray-100 flex items-center justify-center">
  <div className="container max-w-screen-lg mx-auto">
    <div>
      <h2 className="font-semibold text-xl text-gray-600 py-5 text-center">Registration Form</h2>

      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-600">
            <p className="font-medium text-lg">Personal Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5">
                <label for="full_name">Full Name</label>
                <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
              </div>

              <div className="md:col-span-5">
                <label for="email">Email Address</label>
                <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com" />
              </div>
              <div className="md:col-span-5">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="Enter Password" />
              </div>
              <div className="md:col-span-5">
                <label for="number">Phone Number</label>
                <input type="number" name="number" id="number" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
              </div>
             
              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

   
  </div>
</div>
        </>
    )
}
export default Register;