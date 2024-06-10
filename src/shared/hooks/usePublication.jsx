import { useState } from "react";
import { agregarComentario as agregarComentarioService } from "../../services";
import toast from "react-hot-toast"; 

export const usePublication = () => {
    const [publications, setPublications] = useState();

    const savePublications = async (id, data) => {
        try {
            const response = await agregarComentarioService(id, data);
            if (response.error) {
                toast.error(
                    response.e?.response?.data || "Error al agregar comentario"
                );
            } else {
                toast.success("Comentario agregado correctamente");
            }
        } catch (error) {
            console.error("Error al agregar comentario:", error);
            toast.error("Error al agregar comentario");
        }
    };

    return { publications, savePublications };
};
