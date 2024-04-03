"use client";
import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronRightIcon, CheckIcon } from "@heroicons/react/20/solid";

type DropdownType = {
  label: string;
  value: string[];
  onChange: (value: string) => void;
  options: string[];
};

const DropdownMultiple = (props: DropdownType) => {
  const itemStyle: string =
    "flex flex-row text-violet-700 items-center p-1 rounded-sm hover:bg-violet-700 hover:outline-none hover:cursor-pointer hover:text-white";
  return (
    <div className="w-full flex flex-col">
      <label
        /*className={`${error ? "text-red-400" : "text-white"}`*/ className="text-white pb-2"
      >
        {props.label}
      </label>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="flex p-2 items-center h-14 w-full glass rounded-md border text-white">
          <div className="grow flex">
            {!!props.value
              ? props.value.join(", ")
              : "Select any options that apply"}
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content asChild className="">
            <div className="flex flex-col bg-white rounded-md shadow-2xl w-[52rem] p-2">
              {props.options.map((item, idx) => (
                <DropdownMenu.CheckboxItem
                  key={idx}
                  className={itemStyle}
                  checked={props?.value?.includes(item)}
                  onCheckedChange={() => props.onChange(item)}
                  onSelect={(e) => e.preventDefault()}
                >
                  {item}
                  <DropdownMenu.ItemIndicator className="pl-2">
                    <CheckIcon className="h-4 w-4" />
                  </DropdownMenu.ItemIndicator>
                </DropdownMenu.CheckboxItem>
              ))}
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default DropdownMultiple;
