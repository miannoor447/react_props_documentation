import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CollapsibleDocPage from './DocumentationPage';
import { Button, Container, Grid, Typography } from '@mui/material';
import ComponentSelection from './componentSelection';

const App = () => {
const [selectedComponent, setSelectedComponent] = useState(null);
  const Data = {

    features: {
      export: {
        apiUrl: 'https://api.example.com/export',
        onExport: (exportType) => {  },
        exportOptions: {
          formats: ['CSV', 'PDF'],
          includeHeaders: true,
        },
        onSuccess: () => { alert('Export successful!') },
        onFailure: (error) => { alert(`Export failed: ${error.message}`) }
      },
      filter: {
        apiUrl: 'https://api.example.com/export',
        onFilter: (filterParams) => {  },
        filterOptions: {
          filterBy: ['status', 'category'],
          statusOptions: ['active', 'inactive'],
        }
      },
      sort: {
        apiUrl: 'https://api.example.com/export',
        defaultSortField: 'name',
        defaultSortOrder: 'asc',
        onSort: (sortBy) => { },
        multiColumnSort: true,
      },
      search: {
        apiUrl: 'https://api.example.com/export',
        searchFields: ['name', 'email'],
        onSearch: (query) => { },
        onAdvancedSearch: (criteria) => {  },
      },
      list: {
        coloumnsHeaders: ['Name', 'Email', 'Status', 'Actions'],

        apiUrl: 'https://api.example.com/export',
        onRowClick: (rowData) => { },
        onRowDoubleClick: (rowData) => { },
        onRowSelect: (selectedRows) => { },
        onRowDeselect: (deselectedRows) => { },
        onRowExpand: (expandedRow) => { },
        onRowCollapse: (collapsedRow) => { },

      },
      
      pagination: {
        apiUrl: 'https://api.example.com/export',
        pageSize: 10,
        onPageSizeChange: (pageSize) => { },
        onPageChange: (page) => { },
      },
      grid  : {
        coloumnsHeaders: ['Name', 'Email', 'Status', 'Actions'],
        apiUrl: 'https://api.example.com/export',
        onRowClick: (rowData) => { },
        onRowDoubleClick: (rowData) => { },
        onRowSelect: (selectedRows) => { },
        onRowDeselect: (deselectedRows) => { },
        onRowExpand: (expandedRow) => { },
        onRowCollapse: (collapsedRow) => { },
      },
    },

  };
  

  const config = {
    
    viewMode: {
      list:{coloumns:4},
      
    },

    features: {
      multiStep: true,
      export:true,
      filter:true,
      sort:true,
      search:true,
      pagination:true,
      bulkActions:true,

    }
  };
  
  
  const appearance = {
export:{
  buttonStyle: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
  modalStyle: {
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  },
  modalButtonStyle: {
    cancelButton: {
      backgroundColor: '#ccc',
      color: '#333',
    },
    confirmButton: {
      backgroundColor: '#ff0000',
      color: '#fff',
    },
  }
},
filter:{
  buttonStyle: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
  modalStyle: {
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  },
  modalButtonStyle: {
    cancelButton: {
      backgroundColor: '#ccc',
      color: '#333',
    },
    confirmButton: {
      backgroundColor: '#ff0000',
      color: '#fff',
    },
  }
},
sort:{

  buttonStyle: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
  modalStyle: {
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  },
  modalButtonStyle: {
    cancelButton: {
      backgroundColor: '#ccc',
      color: '#333',
    },
    confirmButton: {
      backgroundColor: '#ff0000',
      color: '#fff',
    },
  }
},
  };
  const buttonsData = [
    {
      label: 'Listing Component',
      name:'Listing',
      background: 'linear-gradient(90deg, #8E2DE2 0%, #4A00E0 100%)',
      onClick: () => setSelectedComponent("Listing"),
    },
    {
      label: 'Graph Component',
      name:'Graph',
      background: 'linear-gradient(90deg, #43C6AC 0%, #191654 100%)',
      onClick: () => setSelectedComponent("Graph"),
    },
    {
      label: 'Form Component',
      name:"Form",
      background: 'linear-gradient(90deg, #ff9966 0%, #ff5e62 100%)',
      onClick: () => setSelectedComponent("Form"),
    },
  ];
//   return (

//   //  <CollapsibleDocPage Data={Data} config={config} appearance={appearance} />

//   // );
//   <Container style={{ marginTop: '50px' }}>
//   <Typography variant="h4" align="center" gutterBottom>
//     Select a Component to View Props
//     </Typography>
      


//   <Grid container spacing={3} justifyContent="center">
//     {/* Button for Graph Component */}
//     <Grid item xs={12} sm={6} md={4}>
//       <Button
//         fullWidth
//         style={{
//           background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
//           color: '#fff',
//           padding: '15px',
//           borderRadius: '10px',
//           fontSize: '18px',
//         }}
//         onClick={() => {}}
//       >
//         Listing Component
//       </Button>
//     </Grid>

//     <Grid item xs={12} sm={6} md={4}>
//       <Button
//         fullWidth
//         style={{
//           background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
//           color: '#fff',
//           padding: '15px',
//           borderRadius: '10px',
//           fontSize: '18px',
//         }}
//         onClick={() => {}}
//       >
//         Graph Component
//       </Button>
//     </Grid>

//     {/* Button for Form Component */}
//     <Grid item xs={12} sm={6} md={4}>
//       <Button
//         fullWidth
//         style={{
//           background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
//           color: '#fff',
//           padding: '15px',
//           borderRadius: '10px',
//           fontSize: '18px',
//         }}
//         onClick={() => {}}
//       >
//         Form Component
//       </Button>
//     </Grid>

//     {/* Add more buttons for other components as needed */}
//   </Grid>
// </Container>
//   );

return (
 < Grid item xs={12} sm={6} md={4}>
<ComponentSelection buttonsData={buttonsData} />
 {selectedComponent && <CollapsibleDocPage Data={Data} config={config} appearance={appearance} component={selectedComponent}/>}
</Grid>
);
};

export default App;
