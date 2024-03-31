import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useToys from "../../../hooks/useToys";
import CategoryTab from "../CategoryTab";
import bannerImg from "../../../../assets/banner/banner1.jpg";

const AllToys = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [toys] = useToys();

  // Filter toys into separate arrays based on sub_category
  const remote = toys.filter((item) => item.sub_category === "remote");
  const educational = toys.filter(
    (item) => item.sub_category === "educational"
  );
  const model = toys.filter((item) => item.sub_category === "model");

  return (
    <div className="mt-20 max-w-screen-2xl mx-auto">
      <div className=" relative">
        <img src={bannerImg} className="w-full opacity-50" alt="" />
        <div className=" absolute inset-0 flex justify-center items-center">
          <h2 className="text-5xl text-bold text-blue-700">All Toys</h2>
        </div>
      </div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="text-xl space-y-5 mb-5">
          <Tab>Remote Control Cars</Tab>
          <Tab>Educational Toy Cars</Tab>
          <Tab>Model Cars</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-4 gap-10">
            {/* Render Remote category */}
            {remote.map((item) => (
              <CategoryTab key={item._id} item={item} title={remote} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-4 gap-10">
            {/* Render Educational category */}
            {educational.map((item) => (
              <CategoryTab key={item._id} item={item} title={educational} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-4 gap-10">
            {/* Render Model category */}
            {model.map((item) => (
              <CategoryTab key={item._id} item={item} title={model} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AllToys;
