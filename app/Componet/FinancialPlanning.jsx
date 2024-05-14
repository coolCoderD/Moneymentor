
import React from 'react'

const FinacialPlanning = () => {
  const guides = [
  { title: "Introduction to Financial Planning", author: "Jeremy Vohwinkle", img: "images/secondimage.webp", link:"blog1"},
  { title: "How to Set and Reach Savings Goals", author: " Srishti Desai", img: "images/thirdimage.webp",link:"blog2" },
  { title: "How to Budget Successfully", author: "Miriam Caldwell", img: "images/fourthimage.webp" ,link:"blog3"},
  { title: "5 Keys To Successfully Managing Your Personal Finances", author: "Miriam Caldwell", img: "images/fifthimage.webp",link:"blog4" },
];

  return (
    <div>
      <div className="text-center">
      <h1 className="lg:text-6xl md:text-6xl sm:text-5xl text-3xl font-semibold ">Financial Planning</h1>
      <p className="p-8">To meet short- and long-term financial goals, it is important to plan ahead. These resources will walk you through all aspects of financial planning, teaching you to control your income, expenses, and investments in a way that best works for you.</p>
      <div className="bg-zinc-300 rounded-lg p-8 shadow-lg shadow-zinc-400 w-full h-min-96 mx-auto  ">
        <h1 className="text-3xl font-semibold mb-2">Your Guide to Financial Planning</h1>
        <div className="lg:flex lg:flex-row lg:gap-9 "> 
    <img src="images\firstimage.webp" alt="firstImage" className="rounded-lg object-cover mt-3" />
    <div>
        {guides.map((guide) => (
            <div key={guide.title} className="my-4 flex flex-col sm:flex-row items-center gap-3 text-left"> 
                <img src={guide.img} alt="" className="w-52 h-36 sm:w-36 sm:h-24 object-cover mb-7 " />
                <div>
                    <a href={guide.link} className="text-lg font-semibold hover:underline transition-all duration-100 " >{guide.title}</a>
                    <p className="text-sm font-light">{guide.author}</p>
                </div>
            </div>
        ))}
    </div>
</div>
      </div>
      </div>
    </div>
  )
}

export default FinacialPlanning