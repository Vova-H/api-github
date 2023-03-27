import React, {useEffect, useState} from 'react';
import {Container, Row} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import CustomHeader from "../../components/Custom Header/CustomHeader";
import CustomCard from "../../components/Custom Card/CustomCard";

const RepositoriesPage = () => {
    const state = useLocation()
    const userInfo = state.state.userInfo
    const [repositories, setRepositories] = useState([])

    const fetchRepos = async () => {
        const response = await fetch(`https://api.gitHub.com/users/${userInfo.login}/repos?page=1&per_page=15&sort=pushed`)
        const data = await response.json()
        setRepositories(data)
    }

    useEffect(() => {
        fetchRepos()
    }, [])
    return (
        <Container>
            <CustomHeader user={userInfo.login} userInfo={userInfo}/>
            <Row>
                {
                    repositories.map((rep) => {
                        return (
                            <CustomCard rep={rep} user={userInfo} key={rep.id}/>
                        )
                    })
                }
            </Row>
        </Container>
    );
};

export default RepositoriesPage;
