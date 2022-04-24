import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography  from '@mui/material/Typography';
import Box from '@mui/material/Box'


function TabPanel(props) {
    const { children, value, index , ...other } = props;

    return (
        <div 
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Blood Sugar" {...a11yProps(1)} />
                <Tab label="View Stats" {...a11yProps(2)} />
            </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
            Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
            Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
            Item Three
            </TabPanel>
        </Box>
    );
}


// const Form = () => {
//     return (
//         <>
//         <section>
//             <div className="container">
//                 <div className="row">
//                 <div className="col-lg-7 offset-lg-2 g-0 mx-auto ">
//                     <div className="fill-form form-box">
//                             <div className="form-box__content">
//                                 <div className="tab">
//                                     <button className="tabLinks active">Blood Pressure</button>
//                                     <button className="tabLinks">Blood Sugar</button>
//                                     <button className="tabLinks">View Stats</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 </div>
//         </section>
//         </>
//     )
// }

// export default Form
