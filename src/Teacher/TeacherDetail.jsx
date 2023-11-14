import React, { useState, useEffect} from "react";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function TeacherDetail(){
    const { teacherId } = useParams()
    const [teacherDetail, setTeacherDetail] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://6553268b5449cfda0f2e30e4.mockapi.io/teacher/${teacherId}`)
            .then((res) => res.json())
            .then((data) => {
                setTeacherDetail(data)
                setIsLoading(false)
            })
    }, [teacherId])
    return(
        <>  
            <div>
                <h3>Teacher Detail</h3>
                <Link to={"/teacher"}>Back to Teacher List</Link>
            </div>
            {
                isLoading ? <p>Loading...</p> : (
                    <>
                        <div>Fullname: {teacherDetail.name}</div>
                        <div>Email: {teacherDetail.email}</div>
                    </>
                )
            }
        </>       
    )
}

export default TeacherDetail;