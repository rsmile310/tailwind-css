tailwind.config = {
  theme: {
  extend: {
    backgroundImage:{
      'hero':"url(assets/images/hero.png)",
      'hydragun':"url(assets/images/hydragun.png)",
      'linear-grey' : 'linear-gradient(90deg, #E1E1E1 46.94%, rgba(225, 225, 225, 0) 63.47%)',
      'linear-opacity': 'linear-gradient(90deg, #E1E1E1 52.94%, rgba(225, 225, 225, 0) 64.49%)',
      'linear-gray': 'linear-gradient(90deg, #E1E1E1 52.94%,#E1E1E1  64.49%)'
    },
    maxWidth: {
      '280': '280px',
      '300': '300px',
      '308': '308px',
      '348': '348px',
      '351': '351px',
      '368': '368px',
      '403': '403',
      '444': '444px',
      '453': '453px',
      '497': '497px',
      '500': '470px',
      '555': '555px',
      '600': '600px',
      '626': '626px',
      '680': '680px',
      '552': '552px',
      '673': '673px',
      '779': '779px',
      '1054': '1054px',
      '1232': '1232px',
      '1384': '1384px'
    },
    width:{
      '1900':'1900px',
      '1286':'1286px',
      '1054': '1054px',
      '779': '779px',
      '102':'102px',
      '368':'368px'
    },
    height:{
      '308': '308px',
      '192':'192px',
      '672':'672px'
    },
    spacing:{
      'middle' : '40%',
      '20%':'20%',
      '30': '30px',
      '44': '44px',
      '60': '60px',
      '63': '63px',
      '78': '78px',
      '120': '120px',
      '104': '104px',
      '136': '136px',
      '334': '334px',
      '405': '405px',
      '450': '450px',
      '161': '161px',
      '162': '162px',
      '454': '454px',
      '500': '500px',
      '600': '600px',
      '800': '800px',
      '680': '680px',
      '906': '906px',
      '1134': '1134px',
      '100': '100px',
      '638': '638px',
    },
    colors:{
      'color1':'#303030',
      'color2':'#546178',
      'color3':'#7a7a7a',
      'color4':'#1a1a1a',
    },
    borderRadius: {
      '10': '10px',
    },
    fontSize: {
      '30': '30px',
    },
    fontFamily: {
      alliance: ['alliance', 'sans-serif'],
    },
    fontWeight: {
      'hairline': 100,
      'extra-light': 100,
      'thin': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'extra-bold': 800,
      'black': 900,
    }
  }
  }
}