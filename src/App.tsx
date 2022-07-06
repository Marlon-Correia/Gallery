import { FormEvent, useEffect, useState } from 'react';
import * as C from './App.styles';
import * as Photos from './services/photos';
import { Photo } from "./types/photo";
import { PhotoItem } from './components/photoItem';

const App = () => {
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        const getPhotos =async () => {
            setLoading(true);
            setPhotos(await Photos.getAll())
            setLoading(false);
        }
        getPhotos();
    }, []);

    const handleForm = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const file = formData.get('image') as File;
        if(file && file.size > 0){
            setUploading(true);
            let result = await Photos.insert(file)
            setUploading(false);

            if(result instanceof Error){
                alert(`${result.message}`)
            } else {
                let newPhotos = [...photos];
                newPhotos.push(result);
                setPhotos(newPhotos);
            }
        }

    };

    return(
        <C.Container>
            <C.Area>
                <C.Header>Galeria de Fotos</C.Header>

                <C.UploadForm method="POST" onSubmit={e => handleForm(e)}>
                    <label htmlFor="arquivo">Escolher arquivo</label>
                    <input type='file' name='image' id='arquivo' />
                    <input type="submit" value="Enviar" />
                    {uploading && 'Fazendo upload...'}
                </C.UploadForm>

                {loading &&
                    <C.ScreenWarning>
                        <div className="emoji">✋</div>
                        <div>Carregando...</div>
                    </C.ScreenWarning>
                }
                
                {!loading && photos.length > 0 &&
                    <C.PhotoList>
                        {photos.map( (item, index) => (
                            <PhotoItem key={index} url={item.url} name={item.name} />
                        ))}
                    </C.PhotoList>
                }

                {!loading && photos.length === 0 &&
                    <C.ScreenWarning>
                        <div className="emoji">😨</div>
                        <div>Não há fotos em sua galeria!</div>
                    </C.ScreenWarning>
                }
            </C.Area>


            

        </C.Container>
    )
}
export default App