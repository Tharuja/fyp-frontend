import React from "react";

import { Doughnut } from 'react-chartjs-2';

let g = 0, c = 0, i = 0

const GroupPie = ({ data }) => {
    data.map((data, index) => {
        if (data.group_type === "Group")
            g = g + data.members_amount
        if (data.group_type === "Couple")
            c = c + data.members_amount
        if (data.group_type === "Individuals")
            i = i + data.members_amount
    }
    );

    const state = {
        labels: ['Groups', 'Couples', 'Individuals'],
        datasets: [
            {
                label: 'Customer Type',
                backgroundColor: [
                    '#F86A47',
                    '#8E6DEF',
                    '#07F779',
                ],
                hoverBackgroundColor: [
                    '#C00827',
                    '#5D4C8F',
                    '#067F40',
                ],
                data: [g, c, i]
            }
        ]
    }

    return (

        <Doughnut height="70px"
            data={state}
            options={{
                title: {
                    display: true,
                    text: 'Customers Arrival Types',
                    fontSize: 20
                },
                legend: {
                    display: true,
                    position: 'right'
                }
            }}
        />
    );
};

export default GroupPie;
