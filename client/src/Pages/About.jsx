import React, { useEffect } from 'react';
import './About.css'
const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-from-top');
    elements.forEach(element => {
      element.classList.remove('opacity-0');
      element.classList.add('animate-slide-down');
    });
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8 opacity-0 animate-from-top">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Our organization is dedicated to empowering students and individuals by providing financial assistance and resources to help them achieve their goals. We understand the challenges faced by many in pursuing higher education and personal development, and we are committed to making a positive impact through our initiatives.
          </p>
          <p className="text-gray-700 mb-4">
            By offering accessible loans, financial literacy programs, and personalized support, we aim to break down financial barriers and create opportunities for success. Join us in our mission to foster growth, independence, and financial well-being for all.
          </p>
          <img src="" alt="Our Mission" className=" rounded-lg"/>
        </div>
        <h2 className="text-3xl font-bold mb-6 text-center">About Our Loan Process</h2>
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-lg opacity-0 animate-from-top">
            <h3 className="text-2xl font-bold mb-4">Step 1: Application</h3>
            <p className="text-gray-700">The loan process begins with an application. You can apply online or visit our branch.Borrower will raise his demand of money and also the time he will require to repay the amount.The maximum time is 90 days</p>
            
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg opacity-0 animate-from-top">
            <h3 className="text-2xl font-bold mb-4">Step 2: Notification about Demand</h3>
            <p className="text-gray-700">Community members will be notified about the demand raised by
            borrower.</p>
            
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg opacity-0 animate-from-top">
            <h3 className="text-2xl font-bold mb-4">Step 3:Helpers </h3>
            <p className="text-gray-700">People who are interested to contribute to the loan will add themselves in Add Me section</p>
          
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg opacity-0 animate-from-top">
            <h3 className="text-2xl font-bold mb-4">Step 4: Confirmation</h3>
            <p className="text-gray-700">After the sufficient members joined for loan payment the Manager will notify them about the amount they have to pay.</p>
            
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg opacity-0 animate-from-top">
            <h3 className="text-2xl font-bold mb-4">Step 5: Extra Charge</h3>
            <p className="text-gray-700">If Borrower have asked some x amount then additional cost 1% of x is charged collectively from lenders to fulfill transaction cost issues.</p>
            
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg opacity-0 animate-from-top">
            <h3 className="text-2xl font-bold mb-4">Step 6: Contract Balance</h3>
            <p className="text-gray-700">Now all the lenders will send the required amount to the CONTRACT BALANCE and manager/admin will check that whether they have paid or not..</p>
            
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg opacity-0 animate-from-top">
            <h3 className="text-2xl font-bold mb-4">Step 7: Payment To Borrower</h3>
            <p className="text-gray-700">After receiving Money in Contract Balance, Manager will send it to the Borrower at the same time he will start the loan duration time.</p>
            
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg opacity-0 animate-from-top">
            <h3 className="text-2xl font-bold mb-4">Step 8: Repayment Starts</h3>
            <p className="text-gray-700">When borrower wants to repay the loan amount he will contact to the Manager and ask for Repayable Amount.</p>
            
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg opacity-0 animate-from-top">
            <h3 className="text-2xl font-bold mb-4">Step 9: Interest Calculation</h3>
            <p className="text-gray-700">Manager will stop the loan loan time and calculate Interest Amount.Interest Calculation: There will be a Simple Interest of 2.5% for the days he mentioned during the demand time.After that if He is not able to repay then Interest Amount will be 5% for rest of the days </p>
           
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg opacity-0 animate-from-top">
            <h3 className="text-2xl font-bold mb-4">Step 10: Repayment</h3>
            <p className="text-gray-700">Repayment of the loan will be as per the agreed terms. Ensure timely payments to maintain a good credit score.</p>
           
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg opacity-0 animate-from-top">
            <h3 className="text-2xl font-bold mb-4">Step 11: Repayment</h3>
            <p className="text-gray-700">Repayment of the loan will be as per the agreed terms. Ensure timely payments to maintain a good credit score.</p>
            
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg opacity-0 animate-from-top">
            <h3 className="text-2xl font-bold mb-4">Step 12: Repayment</h3>
            <p className="text-gray-700">Repayment of the loan will be as per the agreed terms. Ensure timely payments to maintain a good credit score.</p>
            
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg opacity-0 animate-from-top">
            <h3 className="text-2xl font-bold mb-4">Step 13: Repayment</h3>
            <p className="text-gray-700">Repayment of the loan will be as per the agreed terms. Ensure timely payments to maintain a good credit score.</p>
            
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;

