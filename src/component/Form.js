import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

import data from "./Data.json";
import TabData from "./TabData";
import TabTitle from "./TabTitle";


const FormTab = () => {
  const [activeTab, setActiveTab] = useState(true);
  return (
    <>
      <div className="form-tab mt-4">
        <h3 className="text-center roboto-font">Book an Appointment</h3>
        
        <Tabs
                defaultActiveKey={0}
                transition={true}
                id="noanim-tab-example"
                className="mb-3 custom-tabs"

            >
                {
                    Object.keys(data).map((v, k) => {
                     // console.log(v);
                     // console.log(k);
                        console.log(data[v].name);
                        return (
                            <Tab eventKey={k}
                                key={k}
                                title={<TabTitle title={data[v].name} />}
                                onClick={()=>{setActiveTab(k);
                                  console.log(v);
                                  data[v].active=== true? data[v].active = false : data[v].active = true;
                                  console.log(data[v])}}
                            >
                                <TabData datakey={v} data={data} />
                            </Tab>
                        )
                    })
                }
            </Tabs>
          
      </div>
    </>
  );
}

export default FormTab;
