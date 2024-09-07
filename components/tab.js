"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const tabs = [
  { name: "Population", href: "?tab=population", current: false },
  { name: "Border countries", href: "?tab=border-countries", current: false },
];

export default function Tab() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentTab = searchParams.get("tab") || "population"; // Default to "population"

  const [activeTabs, setActiveTabs] = useState(tabs);

  useEffect(() => {
    setActiveTabs(
      tabs.map((tab) => ({
        ...tab,
        current: tab.href.includes(currentTab),
      }))
    );
  }, [currentTab]);

  const handleSelectChange = (event) => {
    const selectedTab = event.target.value;
    router.push(tabs.find((tab) => tab.name === selectedTab).href);
  };

  return (
    <div className="mt-3 sm:mt-4">
      {/* Mobile dropdown */}
      <div className="sm:hidden">
        <label htmlFor="current-tab" className="sr-only">
          Select a tab
        </label>
        <select
          id="current-tab"
          name="current-tab"
          value={activeTabs?.find((tab) => tab.current)?.name}
          onChange={handleSelectChange}
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>

      {/* Desktop tabs */}
      <div className="hidden sm:block">
        <nav className="-mb-px flex space-x-8">
          {activeTabs.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              aria-current={tab.current ? "page" : undefined}
              className={
                tab.current
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
