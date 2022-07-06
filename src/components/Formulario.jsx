import { useState } from 'react'
import {Row, Col, Form} from 'react-bootstrap'
import useJuegos from '../hooks/useJuegos'


const PLATFORM = ["all","pc","browser"]
        


const CATEGORY = [
    "mmorpg", "shooter", "strategy", "moba", "racing", "sports", "social", "sandbox", "open-world", "survival", "pvp", "pve", "pixel", "voxel", "zombie", "turn-based", "first-person", "third-Person", "top-down", "tank", "space", "sailing", "side-scroller", "superhero", "permadeath", "card", "battle-royale", "mmo", "mmofps", "mmotps", "3d", "2d", "anime", "fantasy", "sci-fi", "fighting", "action-rpg", "action", "military", "martial-arts", "flight", "low-spec", "tower-defense", "horror", "mmorts"
]

const RELEVANCE = [
    "release-date", "popularity", "alphabetical", "relevance"
]



const Formulario = () => {

    const { handleChangeBusqueda, busqueda } = useJuegos()

    return (
        <Form className='mt-5'>
            <Row>
                <Col md={4}>
                    <Form.Label htmlFor='platform' className='text-white'>Plataforma:</Form.Label>
                    <Form.Select 
                        aria-label='Platform'
                        name="platform"
                        value={busqueda.platform}
                        onChange={ e => handleChangeBusqueda({
                            ...busqueda,
                            [e.target.name] : e.target.value
                        })}
                    >
                        {PLATFORM.map( p => (
                            <option key={p} value={p} className="text-uppercase" id='platform'>{p}</option>
                            ))}   
                    </Form.Select>
                </Col>
                <Col md={4}>
                    <Form.Label htmlFor='category' className='text-white'>Categoria:</Form.Label>
                    <Form.Select 
                        aria-label='Category'
                        name="category"
                        value={busqueda.category}
                        onChange={ e => handleChangeBusqueda({
                            ...busqueda,
                            [e.target.name] : e.target.value
                        })}
                    >
                        <option value="">TODAS</option>
                        {CATEGORY.map( p => (
                            <option key={p}  value={p} className="text-uppercase" id='category'>{p}</option>
                            ))}   
                    </Form.Select>
                </Col>
                <Col md={4}>
                    <Form.Label htmlFor='relevance' className='text-white'>Relevancia:</Form.Label>
                    <Form.Select 
                        aria-label='Relevance'
                        name="relevance"
                        value={busqueda.relevance}
                        onChange={ e => handleChangeBusqueda({
                            ...busqueda,
                            [e.target.name] : e.target.value
                        })}
                    >
                        {RELEVANCE.map( p => (
                            <option key={p}  value={p} className="text-uppercase" id='relevance'>{p}</option>
                            ))}   
                    </Form.Select>
                </Col>
            </Row>

        </Form>
    )
}

export default Formulario