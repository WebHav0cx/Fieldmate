import React from "react";

function EquipmentUpdate() {
  return (
    <div className="font-inria bg-default-background">
      <section className="bg-default-background flex gap-8 flex-col pl-[6.25rem] py-28 pt-8">
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold">My Equipment</h2>
          <ul className="flex flex-col gap-4 pl-10 list-disc">
            <li> John Deere 6130R Tractor</li>
            <li>Self-Propelled Combine Harvester - 200 HP</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 justify-center items-start">
          <h2 className="text-3xl font-bold">Rental History</h2>
          <table class="table-auto bg-table-background">
            <thead>
              <tr>
                <th class="w-14.75rem text-center border border-black p-4 font-bold">
                  Name
                </th>
                <th class="w-14.75rem text-center border border-black p-4 font-bold">
                  Equipment
                </th>
                <th class="w-14.75rem text-center border border-black p-4 font-bold">
                  Rental duration
                </th>
                <th class="w-14.75rem text-center border border-black p-4 font-bold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="w-[14.75rem] text-center border border-black p-4">
                  Aderemi Iyanu
                </td>
                <td class="w-[14.75rem] text-center border border-black p-4">
                  John Deere 6130R Tractor
                </td>
                <td class="w-[14.75rem] text-center border border-black p-4">
                  10th July 2023 - date
                </td>
                <td class="w-[14.75rem] text-center border border-black p-4">
                  Ongoing
                </td>
              </tr>
              <tr>
                <td class="w-[14.75rem] text-center border border-black p-4">
                  Aderemi Iyanu
                </td>
                <td class="w-[14.75rem] text-center border border-black p-4">
                  John Deere 6130R Tractor
                </td>
                <td class="w-[14.75rem] text-center border border-black p-4">
                  10th Feb. 2022 - 15 Feb. 2022
                </td>
                <td class="w-[14.75rem] text-center border border-black p-4">
                  Completed/Returned
                </td>
              </tr>
              <tr>
                <td class="w-[14.75rem] text-center border border-black p-4">
                  Aderemi Iyanu
                </td>
                <td class="w-[14.75rem] text-center border border-black p-4">
                  John Deere 6130R Tractor
                </td>
                <td class="w-[14.75rem] text-center border border-black p-4">
                  10th Jan. 2022 - 15 Jan. 2022
                </td>
                <td class="w-[14.75rem] text-center border border-black p-4">
                  Completed/Returned
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <button className="bg-default-green text-white px-[7.5rem] py-[1.88rem] text-2xl mb-12 ml-[6.25rem]">
        Update Information
      </button>
    </div>
  );
}

export default EquipmentUpdate;
