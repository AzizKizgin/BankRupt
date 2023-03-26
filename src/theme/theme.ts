import {extendTheme} from 'native-base';

const theme = extendTheme({
  components: {
    Input: {
      baseStyle: {
        w: '75%',
        _focus: {
          selectionColor: 'darkBlue.900',
          borderColor: 'darkBlue.800',
        },
        backgroundColor: 'white',
        borderColor: 'darkBlue.900',
      },
      defaultProps: {
        fontSize: '14',
      },
    },
    Pressable: {
      baseStyle: {
        _pressed: {
          opacity: 0.8,
        },
      },
    },
  },
});

type CustomTheme = typeof theme;
declare module 'native-base' {
  interface ICustomTheme extends CustomTheme {}
}

export default theme;
