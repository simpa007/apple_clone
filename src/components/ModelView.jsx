import React, { Suspense } from "react";
import {
	Html,
	OrbitControls,
	PerspectiveCamera,
	View,
} from "@react-three/drei";
import Lights from "./Lights";
import IPhone from "./IPhone";
const ModelView = ({
	index,
	groupRef,
	gsapType,
	controlRef,
	setRotationState,
	item,
	size,
}) => {
	return (
		<View
			index={index}
			id={gsapType}
			className={`border-2 border-red-500 w-full h-full ${
				index === 2
			} ? "right-[-100%]" : ""`}
		>
			// Ambient Light
			<ambientLight intensity={0.3} />
			<PerspectiveCamera makeDefault position={[0, 0, 4]} />
			<Lights />
			<OrbitControls
				makeDefault
				ref={controlRef}
				enableZoom={false}
				enablePan={false}
			/>
			<group
				ref={groupRef}
				name={`${index == 1} ? "small" : "large"`}
				position={[0, 0, 0]}
			>
				<Suspense
					fallback={
						<Html>
							<div>Loading</div>
						</Html>
					}
				>
					<IPhone />
				</Suspense>
			</group>
		</View>
	);
};

export default ModelView;
