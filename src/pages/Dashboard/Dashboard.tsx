import React from "react";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/UI/Card/Card";
import { AiFillEye, AiOutlineCaretDown, AiOutlineSearch } from "react-icons/ai";
import { BiUserPlus } from "react-icons/bi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsCalendarDate, BsFilter } from "react-icons/bs";
import ActivityAvatar from "../../assets/avatar-activity.jpeg";
import Button from "../../components/UI/Button/Button";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <Layout>
      <main className="px-20 mt-10">
        <h2 className="text-4xl font-extrabold">Welcome Abasiama</h2>
        <p className="mt-2">Pay and manage your employee in minutes</p>
        <section className="mt-10 flex gap-5">
          <main className="w-[80%]">
            <Card classNames="bg-[#11453B] px-5 py-10 flex items-center justify-between">
              <div className="text-white">
                <h2 className="text-[#D9EBCDB2] mb-5">Wallet Balance</h2>
                <div className="flex items-center justify-between">
                  <p className="text-5xl mr-5">N126, 560, 078.00</p>
                  <AiFillEye size={33} />
                </div>
              </div>

              <Button classNames="bg-[#D9EBCDB2] rounded-full px-10 shadow-2xl" text="Fund Wallet" />
            </Card>

            <div className="grid grid-cols md:grid-cols-4 space-x-3 mt-10">
              <Card classNames="py-10 px-5 flex flex-col items-center justify-center">
                <div className="bg-[#FFEDEC] p-5 rounded-3xl mb-3">
                  <BiUserPlus size={33} color="#EA4E4B" />
                </div>
                <h3>Add Employee</h3>
              </Card>

              <Card classNames="p-4 flex flex-col items-center justify-center">
                <div className="bg-[#F0F7EB] p-5 rounded-3xl mb-3">
                  <FaMoneyBillAlt size={33} color="#11453B" />
                </div>

                <h3>Add Employee</h3>
              </Card>

              <Card classNames="p-4 flex flex-col items-center justify-center">
                <div className="bg-[#F0F7EB] p-5 rounded-3xl mb-3">
                  <LuSend size={33} color="#219653" />
                </div>
                <h3>Pay Compliances</h3>
              </Card>

              <Card classNames="p-4 flex flex-col items-center justify-center">
                <div className="bg-[#EDF5FF] p-5 rounded-3xl mb-3">
                  <GiTakeMyMoney size={33} color="#2F80ED" />
                </div>
                <h3> Quick Loan</h3>
              </Card>
            </div>
          </main>

          <aside className="w-[20%]">
            <Card classNames="rounded-md pb-14">
              <div className="bg-[#D9EBCD] p-5 rounded-t-xl">
                <h2>Next Payroll</h2>
              </div>

              <div className="flex items-center justify-center py-10">
                <BsCalendarDate size={33} className="mr-2" />
                <p>Friday</p>
              </div>

              <div className="divide-x-2" />

              <div className="p-5">
                <h2>Total Employee</h2>
                <h4 className="text-5xl mt-2">64</h4>
              </div>

              <div className="px-4">
                <div className="bg-gradient-to-r from-[#11453B] to-[#EA4E4B] h-4"></div>
                <div className="flex items-center justify-between">
                  <small>Male</small>
                  <small>Female</small>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <section>
          <Card classNames="p-10">
            <div className="flex items-center justify-between">
              <div>
                <h3>Inflow</h3>
                <p className="text-[#219653] text-4xl">N1,567,552</p>
              </div>
              <div>
                <h3>Outflow</h3>
                <p className="text-[#EF4444] text-4xl">N1,567,552</p>
              </div>

              <div className="flex items-center">
                <p className="mr-2">inflow/Outflow</p>
                <AiOutlineCaretDown />
              </div>
            </div>
          </Card>
        </section>
        <section className="mt-10">
          <h2 className="text-4xl mb-3">Recent Activities</h2>

          <div className="flex items-center gap-5">
            <div className="flex border rounded-md flex-1">
              <input
                type="text"
                className="w-full outline-none bg-transparent px-5"
              />
              <div className="bg-[#D9EBCD] w-24 flex items-center justify-center py-5 rounded-e-md">
                <AiOutlineSearch />
              </div>
            </div>
            <div className="rounded border border-[#D9EBCD] py-4 px-4 flex">
              <BsFilter size={22} color="#B5B6B5" />
              <span className="text-[#B5B6B5]">Filter</span>
            </div>
          </div>
        </section>
        <section className="bg-[rgba(242, 241, 241, 0.50)] mt-10">
          <h2 className="my-4 text-[#515251] text-xl">
            Wednesday, November 09, 2022
          </h2>
          <Card classNames="py-4">
            <h2 className="px-10 mb-5 text-[#8D8E8D]">Payroll</h2>
            <div className="flex items-center justify-between px-10">
              <div className="flex items-center">
                <div className="bg-[#01AA8C] p-4 rounded-full text-white mr-2">
                  <h2>BM</h2>
                </div>
                <p>Badmus Kemis</p>
              </div>

              <div className="">
                <h2 className="text-[#8D8E8D]">Activity</h2>
                <p>Paid November 2022 salary</p>
              </div>

              <div className="">
                <h2 className="text-[#8D8E8D]">Bonus Name</h2>
                <p>Xmas Bonus</p>
              </div>
            </div>
          </Card>

          <Card classNames="py-8">
            <h2 className="px-10 mb-5 text-[#8D8E8D]">EMPLOYEE MANAGEMENT</h2>
            <div className="flex items-center justify-between px-10">
              <div className="flex items-center">
                <div className="p-4 text-white mr-2">
                  <img
                    src={ActivityAvatar}
                    alt=""
                    className="rounded-full w-16 h-16 object-cover"
                  />
                </div>
                <p>Badmus Kemis</p>
              </div>

              <div className="">
                <h2 className="text-[#8D8E8D]">Activity</h2>
                <p>Added new employee</p>
              </div>

              <div className="">
                <h2 className="text-[#8D8E8D]">Bonus Name</h2>
                <p>Xmas Bonus</p>
              </div>
            </div>
          </Card>

          <h2 className="my-4 text-[#515251] text-xl">
            Wednesday, November 04, 2022
          </h2>
          <Card classNames="py-4">
            <h2 className="px-10 mb-5 text-[#8D8E8D]">Payroll</h2>
            <div className="flex items-center justify-between px-10">
              <div className="flex items-center">
                <div className="bg-[#01AA8C] p-4 rounded-full text-white mr-2">
                  <h2>BM</h2>
                </div>
                <p>Badmus Kemis</p>
              </div>

              <div className="">
                <h2 className="text-[#8D8E8D]">Activity</h2>
                <p>Paid November 2022 salary</p>
              </div>

              <div className="">
                <h2 className="text-[#8D8E8D]">Bonus Name</h2>
                <p>Xmas Bonus</p>
              </div>
            </div>
          </Card>

          <Card classNames="py-4">
            <h2 className="px-10 mb-5 text-[#8D8E8D]">Payroll</h2>
            <div className="flex items-center justify-between px-10">
              <div className="flex items-center">
                <div className="bg-[#01AA8C] p-4 rounded-full text-white mr-2">
                  <h2>BM</h2>
                </div>
                <p>Badmus Kemis</p>
              </div>

              <div className="">
                <h2 className="text-[#8D8E8D]">Activity</h2>
                <p>Paid November 2022 salary</p>
              </div>

              <div className="">
                <h2 className="text-[#8D8E8D]">Bonus Name</h2>
                <p>Xmas Bonus</p>
              </div>
            </div>
          </Card>
        </section>
        <br /> <br /> <br />
      </main>
    </Layout>
  );
};

export default Dashboard;
