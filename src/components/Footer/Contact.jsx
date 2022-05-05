import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="mt-[80px] flex gap-[20px]">
        <div className="grid gap-[40px]">
          <h4 className="w-[80px] h-[21px] font-[400] text-[14px] leading-[21px] text-[#3E86F5] tracking-[0.12em]">
            COMPANY
          </h4>
          <div className="grid gap-[20px]">
            <p className="text-[14px] font-[400] leading-[21px] tracking-[0.02em]">
              About
            </p>
            <p className="text-[14px] font-[400] leading-[21px] tracking-[0.02em]">
              Careers
            </p>
            <p className="text-[14px] font-[400] leading-[21px] tracking-[0.02em]">
              Mobile
            </p>
          </div>
        </div>
        <div className="grid gap-[40px]">
          <h4 className="w-[80px] h-[21px] font-[400] text-[14px] leading-[21px] text-[#3E86F5] tracking-[0.12em]">
            CONTACT
          </h4>
          <div className="grid gap-[20px]">
            <p className="text-[14px] font-[400] leading-[21px] tracking-[0.02em]">
              FAQ
            </p>
            <p className="text-[14px] font-[400] leading-[21px] tracking-[0.02em]">
              Press
            </p>
            <p className="text-[14px] font-[400] leading-[21px] tracking-[0.02em]">
              Affiliates
            </p>
          </div>
        </div>

        <div className="grid gap-[40px]">
          <h4 className="w-[80px] h-[21px] font-[400] text-[14px] leading-[21px] text-[#3E86F5] tracking-[0.12em]">
            MORE
          </h4>
          <div className="grid gap-[20px]">
            <p className="text-[14px] font-[400] leading-[21px] tracking-[0.02em]">
              Airlines
            </p>
            <p className="text-[14px] font-[400] leading-[21px] tracking-[0.02em]">
              Airfees
            </p>
            <p className="text-[14px] font-[400] leading-[21px] tracking-[0.02em]">
              Lowfare Tips
            </p>
          </div>
        </div>
      </div>
      <div className=" flex gap-[21px] mt-[120px]">
        <p className="w-fit h-[25px]   text-[12px] font-[500] leading-[209%]">
          Privacy Policy
        </p>
        <p className="w-fit h-[25px] text-[12px]  font-[500] leading-[209%]">
          Terms of Use
        </p>
      </div>
    </div>
  );
};

export default Contact;
