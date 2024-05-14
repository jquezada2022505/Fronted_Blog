import { useState, useEffect } from 'react';
import { Nav } from '../../components/nav/Nav';
import { PublicationCard } from '../../components/publications/publications';
import { listarPublicaciones } from '../../services';
import { PublicationDetails } from '../../components/publicationDetails/publicationDetails';
import { Principal } from '../../components/principal/principal';

export const DashboardPage = () => {
  const [publications, setPublications] = useState([]);
  const [selectedPublicationId, setSelectedPublicationId] = useState(null);

  const handleReadMoreClick = (id) => {
    console.log('Leer más de click', id);
    setSelectedPublicationId(id);
  };

  useEffect(() => {
    console.log('ID de publicación seleccionada:', selectedPublicationId);
  }, [selectedPublicationId]);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await listarPublicaciones();
        if (!response.error) {
          setPublications(response.data || []);
        } else {
          console.log('Error:', response.data);
        }
      } catch (error) {
        console.log('Error al recuperar publicaciones', error);
      }
    };
    fetchPublications();
  }, []);

  return (
    <>
      <Nav />
      {selectedPublicationId === null ? (
        <PublicationCard publications={publications} onReadMoreClick={handleReadMoreClick} />
      ) : (
        <PublicationDetails publicationId={selectedPublicationId} />
      )}
      {selectedPublicationId === null && <Principal/>}
    </>
  );
};