import * as C from './styles';

type Props = {
    name: string;
    url: string;
}

export const PhotoItem = ({name, url}:Props) => {
    return(
        <C.Container>
            <C.Image src={url} alt={name} />
            {name}
        </C.Container>
    )
}