"use client";
import { SelectItem, Select as HeriUiSelect } from "@heroui/select";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { SelectorIcon } from "../icons";

interface SelectProps {
  className?: string;
  classNames?: {};
  size?: "sm" | "md" | "lg" | undefined;
  placeholder?: string;
  label?: string;
  query?: boolean;
  queryKey?: string;
  isClearable?: boolean;
  options: {
    label: string;
    key: string;
  }[];
}

const Select = ({
  options,
  className,
  placeholder,
  label,
  size,
  query,
  queryKey,
  isClearable,
}: SelectProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <HeriUiSelect
      className={`max-w-xs ${className}`}
      items={options}
      label={label}
      placeholder={placeholder}
      size={size}
      selectorIcon={<SelectorIcon />}
      isClearable={isClearable}
      classNames={{
        mainWrapper: " rounded-xl border border-gray-100",
        base: "rounded-xl border border-gray-100",
        label: "text-xs !py-0",
        trigger: "h-9 min-h-9 max-h-9",
        value: "text-xs",
      }}
      onChange={(e) => {
        if (query && queryKey) {
          router.push(pathname + `?${queryKey}=${e.target.value}`);
        }
      }}
    >
      {(option) => <SelectItem>{option.label}</SelectItem>}
    </HeriUiSelect>
  );
};

export default Select;
