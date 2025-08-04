import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo({func: is50}) {
  return (
    <Select>
      <SelectTrigger onChange={is50} className="w-[180px]">
        <SelectValue placeholder="Select Total Marks" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Total Marks</SelectLabel>
          <SelectItem value={false}>100</SelectItem>
          <SelectItem value={true}>50</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
