import { Link, RelativePathString } from "expo-router"
import { Pressable, StyleProp, TextStyle,Text } from "react-native"

interface Props {
    label: string,

    link: RelativePathString,
    buttonStyle?:StyleProp<TextStyle>,

}

export const Botonmenu = ({label,link,buttonStyle}:Props) => {
  return (
    <Pressable>
        <Link href={link}>
        
            <Text style={[buttonStyle]}>
                {label}
            </Text>
            </Link>
    </Pressable>
  )
}
