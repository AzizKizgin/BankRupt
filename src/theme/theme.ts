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
    Box: {
      variants: {
        screenTop: {
          alignItems: 'center',
          justifyContent: 'center',
          bg: {
            linearGradient: {
              colors: ['darkBlue.900', 'darkBlue.800'],
              start: [0, 0],
              end: [0, 1],
            },
          },
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
