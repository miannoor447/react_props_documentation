import React, { useState } from 'react';
import GenericDataGrid from "./DataGrid.js/datagrid";
import CloGraph from './Graph/Graph';
import AddModal from './modals/addModal';
import { Grid, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add'; // Importing an icon
import Sidebar from './LeftSidebar';
import SchoolIcon from '@mui/icons-material/School';
import DashboardIcon from '@mui/icons-material/Dashboard';

function Components() {
    const [isOpen, setIsOpen] = useState(false);
    const iconMapping = {
        'CourseHome': <SchoolIcon sx={{ color: '#40E0D0' }} />,  // Turquoise
        "CourseDashboard": <DashboardIcon sx={{ color: '#FF6347' }} />,
      };
      const [data, setData] = useState([
        { ComponentID: 1, Name: 'Component A', Score: 85 },
        { ComponentID: 2, Name: 'Component B', Score: 90 },
        { ComponentID: 3, Name: 'Component C', Score: 75 },
        { ComponentID: 4, Name: 'Component D', Score: 88 },
        { ComponentID: 5, Name: 'Component E', Score: 92 },
        { ComponentID: 6, Name: 'Component F', Score: 78 },
      ]);
    const componentsArray = [

        {
            title: "CourseHome",
            path: `/`,
            icon: iconMapping["CourseHome"],
        },
        {
            title: "CourseDashboard",
            icon: iconMapping["CourseDashboard"],
            subNav: [
                {
                    title: "Attendance"
                }]
        },
        {
            title: "Attendance"
        }
    ]
    const InputFields = [
        { name: 'Leaderboard', label: 'Leaderboard Name', type: 'textfield', defaultValue: 'Leaderboard' },
        {
            name: 'LeaderboardComponents',
            label: 'Leaderboard Components',
            type: 'multiSelect',
            options: [
                { label: 'Quizzes', value: 'Quizzes' },
                { label: 'Assignments', value: 'Assignments' },
                { label: 'Exams', value: 'Exams' },
                { label: 'Projects', value: 'Projects' },
            ]
        },
        { name: "Status", label: "Status", type: "Select", options: [{ label: "Active", value: "Active" }, { label: "Draft", value: "Draft" }, { label: "Inactive", value: "Inactive" }] },
        { name: "Positions", label: "Number of Positions", type: "number", min: 0 }
    ];


    // const componentData = [
    //     { ComponentID: 1, Name: 'Component A', Score: 85 },
    //     { ComponentID: 2, Name: 'Component B', Score: 90 },
    //     { ComponentID: 3, Name: 'Component C', Score: 75 },
    //     { ComponentID: 4, Name: 'Component D', Score: 88 },
    //     { ComponentID: 5, Name: 'Component E', Score: 92 },
    //     { ComponentID: 6, Name: 'Component F', Score: 78 },
    //   ];

      const GradingColumns = [
        { field: 'ComponentID', headerName: 'ID', width: 90 },
        { field: 'Name', headerName: 'Name', width: 150 },
        { field: 'Score', headerName: 'Score', width: 110 },
      ];
      const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }

    function handleSetData(data){
        setData(data);
    }
      const communicationProps = {
        apiCommuniction:{
            // getDataAction,
        },
        appCommunication:{
            Id:"ComponentID",
            InputFields,
            data,
            GradingColumns
        },
        callbacks:{
            handleSetData,
        }
    }
    const DataGridAppearanceProps = {
        height: 400,
        // width: '80%',
        // marginLeft: "50px",
        // marginTop: "50px"
        backgroundColor:"#1976d2",
    }
    return (
    
        <Grid>
            <GenericDataGrid communicationProps={communicationProps} appearanceProps={DataGridAppearanceProps} />
        </Grid>
    );
}

export default Components;
