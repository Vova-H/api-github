import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import "./SearchPage.css"


const SearchPage = () => {
    const navigate = useNavigate()
    const [, setUserInfo] = useState({})
    const [user, setUser] = useState("")
    const goRepositories = (data) => navigate("/repos", {state: {userInfo: data}})

    function handleChange(event) {
        setUser(event.target.value)
    }

    const fetchUserInfo = async () => {
        try {
            const response = await fetch(`https://api.gitHub.com/users/${user}`)
            const data = await response.json()
            if (data.message) {
                setUser("")
                alert("There are no users with such nickname")
            } else {
                setUserInfo(data)
                goRepositories(data)
            }
            return null;

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={"search-page-wrapper"}>
            <Form>
                <Form.Group className="mb-3 search-form-wrapper" controlId="formBasicEmail">
                    <Form.Control type="text"
                                  placeholder="Enter you nickname"
                                  className={"search-form-input"}
                                  value={user}
                                  onChange={handleChange}
                    />
                    <Button variant="primary" type={"button"} onClick={fetchUserInfo}>
                        Search
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
};

export default SearchPage;
