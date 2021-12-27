import React from "react";
import {useEffect,useState} from "react";
import {MonsterCard} from "..";
import {Container,Row,Col,FormControl,InputGroup} from "react-bootstrap";
const MonsterList = () => {
    const [monsterList , setMonsterList]= useState([])
    const [filter,setFilter]= useState('');

    //be sorate dasti
    // const [monsterList , setMonsterList]= useState(
    // [{
    //     id: 1,
    //     name: "هیولای آنتن دار",
    //     username:"zahraaa",
    //     website: "قشنگترین هیولای آنتنی جهانم"
    // },
    //     {
    //         id: 1,
    //         name: "هیولای استقلالی",
    //         username:"Reza",
    //         website: "هیولای استقلالی هستم"
    //     },
    //     {
    //         id: 1,
    //         name: "هیولای مو قشنگ",
    //         username:"masi",
    //         website: "هیولایی با دنیای صورتی "
    //     },
    //
    //
    // ])
    const getMonster = ()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setMonsterList(data));

    }
    useEffect(()=> {
        getMonster();
    })
    return(
       <Container>
           <Row>
               <Col>
                   <InputGroup className="m-3 p-2">
                       <FormControl
                           placeholder="میتونی در من جستوجو کنی... :)"
                           onChange={e => setFilter(e.target.value)}
                           aria-label="Recipient's username"
                           aria-describedby="basic-addon2"
                       />
                       <InputGroup.Text id="basic-addon2">جستوجو</InputGroup.Text>
                   </InputGroup>
               {/*<FormControl className="m-3 p-3" type="text" placeholder="میتونی در من جستوجو کنی... :)" />*/}
               </Col>
           </Row>
           <Row>
               {/*{monsterList.map((monster) =>*/}
               {monsterList.filter(monster =>monster.name.toLowerCase().includes(filter.toLowerCase())).map((monster) =>(
                      <Col className="mb-3" key={monster.id} xs={12} sm={6} md={4} lg={3}>
                          <MonsterCard name={monster.name} description={monster.website} img={"https://robohash.org/"+monster.username}/>
                      </Col>
                  ))
               }
               {/*<Col xs={12} sm={6} md={4} lg={3}>*/}
               {/*    <MonsterCard name='هیولای خشمگین' description="من یه هیولا عصبانی هستم >_< " img="https://robohash.org/119"/>*/}
               {/*</Col>*/}
               {/*<Col xs={12} sm={6} md={4} lg={3}>*/}
               {/*    <MonsterCard/>*/}
               {/*</Col>*/}
               {/*<Col xs={12} sm={6} md={4} lg={3}>*/}
               {/*    <MonsterCard/>*/}
               {/*</Col>*/}
               {/*<Col xs={12} sm={6} md={4} lg={3}>*/}
               {/*    <MonsterCard/>*/}
               {/*</Col>*/}

           </Row>
       </Container>
    )
}

export default MonsterList;