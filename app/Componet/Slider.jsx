'use client'
import React,{useState} from 'react'

const Slider = () => {
  const buttons = [
    { id: 1, btn: "Financial Health" },
    { id: 2, btn: "Tax Liability" },
    { id: 3, btn: "Discretionary Income" },
    { id: 4, btn: "Net Worth" },
    { id: 5, btn: "Estate Planning" },
    { id: 6, btn: "Risk Tolerance" },
    { id: 7, btn: "Adjusted Gross Income (AGI)" },
    { id: 8, btn: "Financial Advisor" },
    { id: 9, btn: "401(k)" },
    { id: 10,btn: "Budget"},
    { id: 11, btn:"Social Security"},
    { id:12, btn:"50/30/20 Budget"},
    { id:13,btn:"Discretionary Income"},
    { id:14,btn:"Disposable Income"}
  ];
  const info=[{
    id:1,
    heading:"Financial Health",
    info:"Financial health is a state of being in which a person, business, or financial institution measures their well-being by the condition of monetary assets and liabilities, such as debt and savings.With that in mind, financial health can be defined as the state of well-being of a person, business, or institution’s finances. It’s important to understand that, as with your regular health, your financial health is not merely based on the absence of things like debt. It takes many factors into consideration."
  },
  {
    id:2,
    heading:"Tax Liability",
    info:"Your tax liability is any amount you owe a taxing authority, such as the Internal Revenue Service. Having liability means you’re responsible for something. There can be several components to your total tax liability with an agency, including unpaid taxes from prior years."
  },{
    id:3,
    heading:"Discretionary Income",
    info:"Discretionary income is the income you have left over to spend, save, or invest after you pay taxes and for other essentials such as rent or mortgage, utilities, food, and credit card bills. Discretionary income is less than both total income and disposable income because it's income you can use at your discretion."
  },{
    id:4,
    heading:"Net Worth",
    info:"Your net worth is essentially a grand total of all your assets minus your liabilities. In other words, your net worth is the figure you get when you add up everything you own from the value of your home to the cash in your bank account and then subtract from that the value of all of your debts which may include a mortgage, car or student loans, or even credit card balances."
  },{
    id:5,
    heading:"Esate Planning",
    info:"Estate planning is the systematic approach to organizing your personal and financial affairs to deal with the possibility of mental incapacity or death. Depending on your current family and financial situations, your foundational estate plan will include four or five essential legal estate planning documents."
  },{
    id:6,
    heading:"Risk Tolerance",
    info:"Risk tolerance relates to the amount of market risk an investor can tolerate. In simple terms, it is how much you are willing to be unsure about (and how much money you're willing to spend on this unknown), in the face of possible gains. Risk itself comes in many forms, such as the volatility of a certain stock, or full market ups and downs"
  },{
    id:7,
    heading:"Adjusted Gross Income (AGI)",
    info:"Adjusted gross income (AGI) is a tax term for your gross income minus tax deductions that are allowable whether or not you itemize deductions when you file your tax return. It is the determiner for many of the deductions and credits you will receive, as well as any taxes you will owe when you file your tax return."
  },{
    id:8,
    heading:"Financial Advisor",
    info:"A financial advisor is anyone who advises clients on money issues. It’s a broad term that could include any number of people who might help you with money. Duties include: offering advice on how much money to save, making investment suggestions, offering tax advice, and buying and selling investments on behalf of a client."
  },{
    id:9,
    heading:"401(k)",
    info:"A 401(k) is an employer-sponsored retirement savings plan that lets employees set aside a portion of their wages for the future. It also allows them to reap tax benefits in the process."
  },{
    id:10,
    heading:"Budget",
    info:"A personal or household budget is a summary that compares and tracks your income and expenses for a defined period, typically one month. A budget will show you how much money you expect to bring in, then compare that to your required expenses—such as rent and insurance—and your discretionary spending, such as entertainment or eating out. It is a tool for achieving financial goals."
  },{
    id:11,
    heading:"Social Security",
    info:"Social Security is a federal program that issues benefits to retirees who paid into the program during their working years, people unable to work due to a physical or mental condition, spouses and children of beneficiaries, and surviving family members of beneficiaries. Social Security benefits are administered by the Social Security Administration."
  },{
    id:12,
    heading:"50/30/20 Budget",
    info:"The 50/30/20 rule of thumb is a set of easy guidelines for how to plan your budget. Using them, you allocate your after-tax income to the following categories."
  },{
    id:13,
    heading:"Discretionary Income",
    info:"Discretionary income refers to the amount of income left over after accounting for taxes and essential day-to-day expenses. It's distinct from disposable income, which is simply the amount of income left over after taxes are taken out."
  },{
    id:14,
    heading:"Disposable Income",
    info:"Disposable income is the money you have left from your income after you pay taxes. It's calculated using the following simple formula: disposable income = personal income - personal current taxes."
  }
]
const [selectedButton, setSelectedButton] = useState(1);

return (
  <div className="bg-zinc-300 rounded-lg p-8 shadow-lg shadow-zinc-400 w-full h-min-96 mt-9">
    <h1 className="text-4xl font-semibold  text-center mb-4">Key Terms</h1>
    <div className="flex flex-col-reverse md:flex-row-reverse justify-between ">
      <div className="flex flex-wrap md:gap-2 md:ml-9 gap-1 mt-2 sm:gap-1 sm:mt-2 w-full md:w-1/3"> 
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => setSelectedButton(button.id)}
            className={`bg-slate-600 text-white px-6 py-2 rounded-md transition duration-100 hover:bg-slate-500 focus:outline-none lg:text-lg sm:text-sm ${
              selectedButton === button.id ? 'bg-slate-800' : ''
            }`}
          >
            {button.btn}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-lg p-6 lg:w-1/2 md:w-2/3"> 
        <h1 className='lg:text-2xl sm:text-xl font-semibold mb-3'>{info.find((item) => item.id === selectedButton)?.heading}</h1>
        <p className='text-lg font-light'>{info.find((item) => item.id === selectedButton)?.info}</p>
      </div>
    </div>
  </div>
);
};

export default Slider;