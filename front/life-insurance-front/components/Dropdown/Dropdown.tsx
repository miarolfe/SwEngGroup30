"use client";
import React, { PropsWithChildren } from "react";
import * as Select from "@radix-ui/react-select";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";

type DropdownType = {
  label: String;
  options: String[];
};

const Dropdown = (props: DropdownType) => {
  return (
    <div className="w-full flex flex-col">
      <label
        /*className={`${error ? "text-red-400" : "text-white"}`*/ className="text-white pb-2"
      >
        {props.label}
      </label>
      <Select.Root>
        <Select.Trigger
          className="flex p-2 items-center h-14 w-full glass rounded-md border text-white"
          aria-label="Food"
        >
          <div className="grow flex">
            <Select.Value placeholder="Select an option" />
          </div>
          <Select.Icon className="SelectIcon">
            <ChevronDownIcon className="h-8 w-8 text-white" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="bg-white rounded-md shadow-2xl">
            <Select.ScrollUpButton className="SelectScrollButton">
              <ChevronUpIcon className="h-8 w-8 text-white" />
            </Select.ScrollUpButton>
            <Select.Viewport className="p-2">
              {props.options.map((item, idx) => (
                <SelectItem key={idx} value={item.toLowerCase()}>
                  {item}
                </SelectItem>
              ))}
            </Select.Viewport>
            <Select.ScrollDownButton className="flex justify-center align-center">
              <ChevronDownIcon className="h-8 w-8 text-violet-700" />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

type ButtonProps = React.HTMLProps<HTMLButtonElement>;

const SelectItem = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <Select.Item
        className="flex flex-row text-violet-700 items-center p-1 rounded-sm hover:bg-violet-700 hover:outline-none hover:cursor-pointer hover:text-white"
        {...props}
        ref={ref}
      >
        <Select.ItemText>{props.children}</Select.ItemText>
        <Select.ItemIndicator className="pl-4">
          <CheckIcon className="h-4 w-4" />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);
export default Dropdown;
