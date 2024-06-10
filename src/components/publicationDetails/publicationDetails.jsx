import { useEffect, useState } from 'react';
import { buscarPublicacion } from '../../services';
import './publicationDetails.css';
import { Input } from '../input'
import { agregarComentario } from '../../services';

export const PublicationDetails = ({ publicationId }) => {
    const [publicationDetails, setPublicationDetails] = useState(null);
    const [formState, setFormState] = useState({
        nombre: { value: '', isValid: false, showError: false },
        comentario: { value: '', isValid: false, showError: false }
    });

    const fetchPublicationDetails = async () => {
        try {
            if (publicationId) {
                const data = await buscarPublicacion(publicationId);
                setPublicationDetails(data);
            } else {
                console.error('No publicationId provided');
            }
        } catch (error) {
            console.error('Error fetching publication details:', error);
        }
    };

    const handleInputValueChange = (value, field) => {
        setFormState(prevState => ({
            ...prevState,
            [field]: { ...prevState[field], value }
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = value.length > 0;
        setFormState(prevState => ({
            ...prevState,
            [field]: { ...prevState[field], isValid, showError: !isValid }
        }));
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        const { nombre, comentario } = formState;
        if (!nombre.isValid || !comentario.isValid) {
            toast.error('Por favor, complete todos los campos.');
            return;
        }
        try {
            await agregarComentario(publicationId, nombre.value, comentario.value);
            setFormState({
                nombre: { value: '', isValid: false, showError: false },
                comentario: { value: '', isValid: false, showError: false }
            });
            fetchPublicationDetails();
            toast.success('Comentario agregado correctamente.');
        } catch (error) {
            console.error('Error al agregar comentario:', error);
            toast.error('Error al agregar comentario.');
        }
    };

    useEffect(() => {
        fetchPublicationDetails();
        console.log('Fetching publication details for id:', publicationId);
    }, [publicationId]);

    return (
        <div className="publication-details-container">
            {publicationDetails && (
                <div className="publication-details">
                    <div className="publication-details-item">
                        <label>Titulo:</label>
                        <div>{publicationDetails.data.titulo}</div>
                    </div>
                    <div className="publication-details-item">
                        <label>Descripción:</label>
                        <div>{publicationDetails.data.descripcion}</div>
                    </div>
                    <div className="publication-details-item">
                        <label>Link:</label><br />
                        <a href={publicationDetails.data.link} target="_blank" rel="noopener noreferrer">
                            {publicationDetails.data.link}
                        </a>
                    </div>
                    <div className="publication-details-item">
                        <label>¿Cuál es su función?:</label>
                        <div>{publicationDetails.data.comoFunciona}</div>
                    </div>
                    <div className="publication-details-item">
                        <label>Imágenes:</label>
                        <div className="image-gallery">
                            {publicationDetails.data.imagenes.map((image, index) => (
                                <img key={index} src={image} alt={`Image ${index}`} />
                            ))}
                        </div>
                    </div>
                    <hr />
                    <h2>Comentarios</h2>
                    <div className="publication-details-item">
                        <form className="comment-form" onSubmit={handleFormSubmit}>
                            <Input
                                field="nombre"
                                label="Nombre persona"
                                value={formState.nombre.value}
                                onChangeHandler={handleInputValueChange}
                                onBlurHandler={handleInputValidationOnBlur}
                                type="text"
                                className="comment-input"
                            />
                            <Input
                                field="comentario"
                                label="Comentario"
                                value={formState.comentario.value}
                                onChangeHandler={handleInputValueChange}
                                onBlurHandler={handleInputValidationOnBlur}
                                type="text"
                                className="comment-input"
                            />
                            <button type="submit" className="comment-button">Agregar comentario</button>
                            <br />
                        </form>
                        <div>
                            {publicationDetails.data.comentarios && publicationDetails.data.comentarios.length > 0 ? (
                                publicationDetails.data.comentarios.map((comentario, index) => (
                                    <div key={index} className="comment-card">
                                        <div>
                                            <label>Nombre persona: {comentario.nombre}</label>
                                        </div>
                                        <div>
                                            <label>Comentario: {comentario.comentario}</label>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no-comments">No hay comentarios</div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PublicationDetails;
