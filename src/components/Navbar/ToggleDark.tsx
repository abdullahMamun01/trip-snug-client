"use client";
import {useTheme} from "next-themes";

import { Switch } from "@nextui-org/switch";
import { MoonIcon, SunIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function ToggleDark() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

 
  return (
    <Switch
      defaultSelected
      size="lg"
      onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    ></Switch>
  );
}
