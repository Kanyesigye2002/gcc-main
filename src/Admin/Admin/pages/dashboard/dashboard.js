import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {fetchUserData} from '../../api/authenticationService';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

export const Dashboard = (props) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
            props.history.push('/');
        })
    }, [])

    const logOut = () => {

        localStorage.clear();
        props.history.push('/');

    }

    return (
        <Container>

            <h4>Hello {data && `${data.firstName} ${data.lastName}`}</h4>
            <br></br>
            {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
            <Button type="variant">Add User</Button>}
            <br></br>

            <Button style={{marginTop: '5px'}} onClick={() => logOut()}>Logout</Button>

        </Container>
    )
}