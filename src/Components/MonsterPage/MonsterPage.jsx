import {useEffect,useState} from "react";
import {Link} from "react-router-dom";
import {Container,Card} from "react-bootstrap";
import {useParams} from "react-router-dom";

const MonsterPage = ()=> {
    const params= useParams();
    const [monster,setMonster] = useState(
        {
            id: 1,
            name: "",
            username: "",
            email: "",
            address: {
                street: "",
                suite: "",
                city: "",
                zipcode: "",
                geo: {
                    lat: "",
                    lng: ""
                }
            },
            phone: "",
            website: "",
            company: {
                name: "",
                catchPhrase: "",
                bs: ""
            }
    })
    const getMonster = ()=>{
        fetch('https://jsonplaceholder.typicode.com/users/${params.monsterID}')
            .then(response => response.json())
            .then(data => setMonster(data));
    }
    useEffect(()=> {
        getMonster()

    },[])
    return(
<Container>
    <Card className='w-100 text-center mt-4 p-2 bg-info bg-opacity-25'>
    <Card.Body>
        <img style={{border:'2px solid rgba(146, 79, 173, 0.94)' ,borderRadius:'150px 150px 0px 0px'}} src={"https://robohash.org/"+monster.username}/>
         <Card.Title>{monster.name}</Card.Title>
        <Card.Title>{monster.username}</Card.Title>
        <Card.Title>{monster.email}</Card.Title>
        <Card.Title>{monster.phone}</Card.Title>
        <Card.Title>{monster.website}</Card.Title>
        <Link className='text-decoration-none ' to='/'>برو به صفحه اصلی</Link>
    </Card.Body>
    </Card>
</Container>
    )
}
export default MonsterPage;