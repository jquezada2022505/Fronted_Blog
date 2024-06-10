import { useState } from "react";
import toast from "react-hot-toast";
import { getPublications as getPublicationService } from '../../services';

export const usePublications = () => {
    const [publications, setPublications] = useState([]);

    const getPublicaciones = async () => {
        try {
            const publicationsData = await getPublicationService();
            if (publicationsData.error) {
                toast.error(
                    publicationsData.response?.data || "Error al obtener las publicaciones"
                );
            } else {
                setPublications(publicationsData.data);
            }
            return publicationsData.data;
        } catch (error) {
            console.error("Error al obtener publicaciones:", error);
            toast.error("Error al obtener las publicaciones");
            return [];
        }
    };

    return { publications, getPublicaciones };
};
