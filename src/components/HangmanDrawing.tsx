const HEAD = (<div style={{
  border: '10px solid black',
  borderRadius: '100%',
  width: '50px',
  height: '50px',
  position: 'absolute',
  top: '50px',
  right: '-30px'
}} />)

const BODY = (<div style={{
  background: 'black',
  width: '10px',
  height: '100px',
  position: 'absolute',
  top: '120px',
  right: 0
}} />)

const RIGHT_ARM = (<div style={{
  background: 'black',
  width: '100px',
  height: '10px',
  position: 'absolute',
  top: '150px',
  right: '-100px',
  rotate: '-30deg',
  transformOrigin: 'left bottom'
}} />)

const LEFT_ARM = (<div style={{
  background: 'black',
  width: '100px',
  height: '10px',
  position: 'absolute',
  top: '150px',
  right: '10px',
  rotate: '30deg',
  transformOrigin: 'right bottom'
}} />)

const RIGHT_LEG = (<div style={{
  background: 'black',
  width: '100px',
  height: '10px',
  position: 'absolute',
  top: '210px',
  right: '-90px',
  rotate: '60deg',
  transformOrigin: 'left bottom'
}} />)
const LEFT_LEG = (<div style={{
  background: 'black',
  width: '100px',
  height: '10px',
  position: 'absolute',
  top: '210px',
  right: 0,
  rotate: '-60deg',
  transformOrigin: 'right bottom'
}} />)

function HangmanDrawing() {
  return (
    <div style={{ position: 'relative' }}>
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      
      <div style={{
        background: 'black',
        height: '50px',
        width: '10px',
        position: 'absolute',
        right: 0,
        top: 0,
      }} />
      <div style={{
        background: 'black',
        width: '200px',
        height: '10px',
        marginLeft: '120px',
      }} />
      <div style={{
        background: 'black',
        width: '10px',
        height: '400px',
        marginLeft: '120px',
      }} />
      <div style={{
        background: 'black',
        height: '10px',
        width: '250px'
      }} />
    </div>
  )
}

export default HangmanDrawing