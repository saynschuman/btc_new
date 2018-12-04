import React from "react"
import {
  VictoryChart,
  VictoryStack,
  VictoryGroup,
  VictoryArea,
  VictoryPortal,
  VictoryScatter
} from "victory"

class Index extends React.Component {
  render() {
    return (
      <div>
        <VictoryChart
          style={{
            parent: {
              border: "1px solid #ccc",
              backgroundColor: "#fff"
            }
          }}
          scale={{ x: "time" }}
          width={400}
          height={400}
        >
          <VictoryStack colorScale="warm">
            <VictoryGroup
              data={[
                { x: new Date(1986, 1, 1), y: 3 },
                { x: new Date(1996, 1, 1), y: 1 },
                { x: new Date(2006, 1, 1), y: 4 },
                { x: new Date(2016, 1, 1), y: 2 }
              ]}
            >
              <VictoryArea />
              <VictoryPortal>
                <VictoryScatter style={{ data: { fill: "#fff" } }} />
              </VictoryPortal>
            </VictoryGroup>
          </VictoryStack>
        </VictoryChart>
      </div>
    )
  }
}

export default Index
