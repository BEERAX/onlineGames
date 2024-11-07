import React from "react";
import Button from "./base/button/Button";
import classNames from "../utils/classNames";
import SvgWrapper from "./base/wrapper/SvgWrapper";

const EP_BALANCE = 2999.99;
const Header = () => {
  return (
    <div
      className={classNames(
        "h-[50px] w-full sticky top-0 flex justify-between",
        "px-2 shadow-md bg-white"
      )}
    >
      <div className="flex-1 flex items-center justify-start gap-1">
        <Button size="xs">
          <SvgWrapper
            alt="Menu"
            src="/assets/header/menu.svg"
            className="h-4 w-4"
          />
        </Button>
        <span className="text-sm text-gray-500 font-bold">
          RAN ONLINE WASAKAN
        </span>
      </div>
      <div className="flex items-center justify-end">
        <div className="flex gap-2 items-center">
          <SvgWrapper
            alt="Wallet"
            src="/assets/header/wallet.svg"
            className="h-[18px] w-[18px] -mt-1"
          />
          <span className="text-sm text-gray-500 font-bold">
            EP{String(EP_BALANCE).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
          <SvgWrapper
            alt="Divider"
            src="/assets/header/divider.svg"
            className="h-[34px]"
          />
        </div>
        <Button size="xs">
          <SvgWrapper
            alt="Account"
            src="/assets/header/user.svg"
            className="h-6 w-6"
          />
        </Button>
      </div>
    </div>
  );
};

export default Header;
