import React, { useEffect, useState } from "react";
import doctorIcon from "../../../../assets/img/NPS Dashboard/DoctorIcon.svg";
import docData from "../../../../mock_API/NPS/NPS Main Dashboard/HealthProfessional.json";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import providersApiData from "../../../../recoil/atoms/providersApiData";
import { useRecoilState } from "recoil";
import PuffLoader from "react-spinners/PuffLoader";

const Providers2 = () => {
  const [apiData, setApiData] = useState();
  const [providerApiAtom, setProviderApiAtom] =
    useRecoilState(providersApiData);

  useEffect(() => {
    setApiData(providerApiAtom?.data);
  }, [providerApiAtom]);

  useEffect(() => {
    console.log("providers api data:");
    console.log(apiData);
  }, [apiData]);

  return (
    <div className=" rounded-lg bg-white transition-all w-[100%] p-2 h-[300px] border">
      {!apiData?.data && (
        <div className="  h-[270px] bg-[#ffffff] z-[200] rounded-lg flex justify-center items-center ">
          <PuffLoader color="#00ac69" size={50} width={100} />
        </div>
      )}

      {apiData?.data?.length === 0 && (
        <div className="flex 2 h-full w-full justify-center items-center text-gray-400">
          No Providers
        </div>
      )}

      {apiData?.data?.length > 0 && (
        <div>
          <h1 className="  font-bold  opacity-80">Providers</h1>

          <div className="h-[260px] overflow-y-scroll">
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Name</th>
                  <th>Top Positive Topic</th>
                  <th>Top Negative Topic</th>
                  <th>Survey Count</th>
                  <th>NPS</th>
                </tr>
              </thead>

              <tbody>
                {apiData?.data?.map((data, idx) => (
                  <tr>
                    <td style={{ width: "7%" }}>
                      <div className="rounded-md text-sm h-10  bg-[#e6f5fc] flex justify-center items-center text-[#0094e0] uppercase">
                        {data?.provider_type}
                      </div>
                    </td>
                    <td style={{ width: "25%" }}>
                      <div className="text-sm">{data?.provider_name}</div>
                      <div className="text-gray-500 text-xs">
                        {data?.provider_category}
                      </div>
                    </td>
                    <td style={{ width: "15%" }}>
                      <div className=" text-gray-500 text-xs flex  items-center ">
                        {apiData?.topic[idx].POSITIVE_TOPIC}
                      </div>
                    </td>
                    <td style={{ width: "20%" }}>
                      <div className="text-gray-500 text-xs flex  items-center">
                        {apiData?.topic[idx].NEGATIVE_TOPIC}
                      </div>
                    </td>
                    <td style={{ width: "5%" }}>
                      <div className="text-sm text-gray-500  my-auto">
                        {data?.count}
                      </div>
                    </td>
                    <td style={{ width: "24%" }}>
                      <div style={{ width: "100%" }}>
                        <div
                          style={{
                            backgroundColor: "rgb(0, 148, 224)",
                            width: `${data?.average_nps}%`,
                            minWidth: "15%",
                            paddingTop: "1px",
                            paddingBottom: "1px",
                            color: "white",
                            textAlign: "center",
                            paddingRight: "20px",
                          }}
                        >
                          {data?.average_nps}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <div className="sticky bg-white top-0 z-[5] ">
              <div className="grid grid-cols-[50px_minmax(150px,1fr)_minmax(100px,1fr)_minmax(100px,1fr)_minmax(60px,0.3fr)_minmax(30px,0.3fr)] gap-2 text-xs text-gray-400 border-b py-2">
                <div className="flex  items-center">Type</div>
                <div className="flex  items-center">Name</div>
                <div className="flex  items-center">Positive Topic</div>
                <div className="flex  items-center">Negative Topic</div>
                <div className="text-center flex justify-center items-center ">
                  Survey Count
                </div>
                <div className="text-center flex justify-center items-center ">
                  NPS
                </div>
              </div>
            </div> */}

            {/* <div className="">
              {apiData?.data?.map((data, index) => {
                return (
                  <div key={index} className="">
                    <div className="grid grid-cols-[50px_minmax(150px,1fr)_minmax(100px,1fr)_minmax(100px,1fr)_minmax(60px,0.3fr)_minmax(30px,0.3fr)] gap-2    py-2 ">
                      <div className="rounded-md text-sm  bg-[#e6f5fc] flex justify-center items-center text-[#0094e0] uppercase">
                        {" "}
                        {data?.provider_type}
                      </div>
                      <div className="">
                        <div className="text-sm">{data?.provider_name}</div>
                        <div className="text-gray-500 text-xs">
                          {data?.provider_category}
                        </div>
                      </div>
                      <div className=" text-gray-500 text-xs flex  items-center">
                        {apiData?.topic[index].POSITIVE_TOPIC}
                      </div>
                      <div className="text-gray-500 text-xs flex  items-center">
                        {apiData?.topic[index].NEGATIVE_TOPIC}
                      </div>
                      <div className="text-sm text-gray-500 text-center">
                        {data?.count}
                      </div>
                      <div className="text-sm text-gray-500 text-center">
                        {" "}
                        {data?.average_nps}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Providers2;
