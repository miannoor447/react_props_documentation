import React,{useEffect} from 'react';

import Components from './Reusable_components/index';
import CollapsibleDocPage from './DocumentationPage';
const  App = () => {



    const Data = {
        items: [], 
        columns: [], 
        apiAction: {}, 
        actions: [
          {
            label: 'Edit',
            onClick: (itemId) => {},
            permission: 'edit_user',
            confirmationMessages: {
                update: {
                    title: 'Confirm Update',
                    message: 'Are you sure you want to update this item?',
                    buttons: [
                    { label: 'Cancel', action: 'cancel' },
                    { label: 'Update', action: 'confirm' },
                    ],
                },
                },
          },
          {
            label: 'Delete',
            onClick: (itemId) => {}, 
            permission: 'delete_user',
            confirmationMessages: {
                delete: {
                  title: 'Confirm Delete',
                  message: 'Are you sure you want to delete this item?',
                  buttons: [
                    { label: 'Cancel', action: 'cancel' },
                    { label: 'Delete', action: 'confirm' },
                  ],
                },
          },
        }
        ],
        
        multiStepActions: {
          steps: [
            {
              label: 'Step 1',
              validation: (stepData) =>{},
              onClick: (stepData) => {},
            },
            {
              label: 'Step 2',
              validation: (stepData) => {},
              onClick: (stepData) => {},
            },
          ],
          finalSubmit: {
            validation: (formData) => {},
            onSubmit: (formData) => {},
          },
        },
        }
      
      
      
      const config = {
        viewMode: 'list',
        showInDarkMode: true, 
        multiStep: true, 
        stepConfig: {
          currentStep: 0, 
          totalSteps: 2,  
        }
      };
      
      
      const appearance = {
        containerStyle: {
          backgroundColor: '#333',
          color: '#fff',
        },
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
        },
      };










return(
<>
<CollapsibleDocPage Data={Data} config={config} appearing={appearance} />
{/* <Components /> */}
</>
)
}

export default App;
