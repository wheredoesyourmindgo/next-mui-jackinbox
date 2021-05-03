import React, {useCallback, useEffect, useState} from 'react'
import JackinBox from '../lib/pkg/index'
import {Box, BoxProps, Divider, Paper, Typography} from '@material-ui/core'
import SyntaxHighlighter from 'react-syntax-highlighter'

const codeBlock = `
import React, {useCallback, useEffect, useState} from 'react'
import JackinBox from 'next-mui-jackinbox'
import {Box, BoxProps, Divider, Paper} from '@material-ui/core'

const IndexPage = () => {
  const Spacing = useCallback(
    () => <div style={{marginTop: 64, marginBottom: 64}} />,
    []
  )

  const [bye, setBye] = useState(false)
  const [showCode, setShowCode] = useState(false)

  useEffect(() => {
    setTimeout(() => setBye(true), 10000)
  }, [])

  const animateEndHandler = useCallback(() => {
    setShowCode(true)
  }, [])

  return (
    <Box component="main" className="App">
      <Spacing />
      <Box
        display={showCode ? 'none' : 'flex'}
        flexDirection="row"
        justifyContent="center"
        width="100%"
      >
        <JackinBox
          name="hinge"
          animate={bye}
          delay={1}
          onAnimateEnd={animateEndHandler}
        >
          <JackinBox name="heartBeat" speed="fast" infinite animate={!bye}>
            <JackinBox name="rollIn" delay={2} speed="slower">
              <Typography variant="h1">Wow!</Typography>
            </JackinBox>
          </JackinBox>
        </JackinBox>
      </Box>
      <JackinBox name="fadeInUpBig" delay={5}>
        <JackinBox
          name="fadeOutLeftBig"
          animate={bye}
          maxWidth="50vw"
          margin="auto"
        >
          <Divider style={{height: 3}} />
        </JackinBox>
      </JackinBox>
    </Box>
  )
}

export default IndexPage
`

const IndexPage = () => {
  const Spacing = useCallback(
    () => <div style={{marginTop: 64, marginBottom: 64}} />,
    []
  )

  const [bye, setBye] = useState(false)
  const [showCode, setShowCode] = useState(false)

  useEffect(() => {
    setTimeout(() => setBye(true), 10000)
  }, [])

  const PaperBox = useCallback(
    ({children, ...rest}: BoxProps) => (
      <Box borderRadius={3} overflow="hidden" bgcolor="#f0f0f0" p={3} {...rest}>
        {children}
      </Box>
    ),
    []
  )

  const animateEndHandler = useCallback(() => {
    setShowCode(true)
  }, [])

  return (
    <Box component="main" className="App">
      <Spacing />
      <Box
        display={showCode ? 'none' : 'flex'}
        flexDirection="row"
        justifyContent="center"
        width="100%"
      >
        <JackinBox
          name="hinge"
          animate={bye}
          delay={1}
          onAnimateEnd={animateEndHandler}
        >
          <JackinBox name="heartBeat" speed="fast" infinite animate={!bye}>
            <JackinBox name="rollIn" delay={2} speed="slower">
              <Typography variant="h1">Wow!</Typography>
            </JackinBox>
          </JackinBox>
        </JackinBox>
      </Box>
      <JackinBox name="fadeInUpBig" delay={5}>
        <JackinBox
          name="fadeOutLeftBig"
          animate={bye}
          maxWidth="50vw"
          margin="auto"
        >
          <Divider style={{height: 3}} />
        </JackinBox>
      </JackinBox>
      <JackinBox name="fadeIn" delay={4} animate={bye} noDisplayUntilAnimate>
        <Typography variant="h2" gutterBottom>
          That was brought to you by...
        </Typography>
        <Paper component={PaperBox}>
          <SyntaxHighlighter language="javascript">
            {codeBlock}
          </SyntaxHighlighter>
        </Paper>
      </JackinBox>
    </Box>
  )
}

export default IndexPage
