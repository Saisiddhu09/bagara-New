import React, { useEffect, useState } from "react";

const Admin = () => {
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/forms")  
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {  // No need for `data.data`
                    setFormData(data);
                } else {
                    console.error("Expected an array but got:", data);
                    setFormData([]); 
                }
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                setFormData([]);  
            });
    }, []);

    return (
        <div>
            <h2>Admin Panel</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Full Name</th>  {/* Match Backend Field */}
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.fullName || entry.name}</td> 
                            <td>{entry.email}</td>
                            <td>{entry.phone || entry.number}</td>  
                            <td>{entry.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Admin;
