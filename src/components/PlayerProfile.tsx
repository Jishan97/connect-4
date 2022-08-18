import { FC, SyntheticEvent } from "react";
import { useRecoilValue, useResetRecoilState, useRecoilState } from "recoil";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Divider,
    Select,
    Button,
    Box, Flex, Heading
} from '@chakra-ui/react'


import { isNameSetState, playerColorState, playerNameState } from "state";




const PlayerProfile: FC = () => {

    const [playerName, setPlayerName] = useRecoilState(playerNameState);
    const [playerColor, setPlayerColor] = useRecoilState(playerColorState);
    const [playerNameSet, setPlayerNameSet] = useRecoilState(isNameSetState);


    const onClickSubmit = (event: SyntheticEvent) => {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            player1Name: { value: string };
            player1Color: { value: string };
            player2Name: { value: string };
            player2Color: { value: string };
        };


        const player1Name = target.player1Name.value;
        const player1Color = target.player1Color.value;
        const player2Name = target.player2Name.value;
        const player2Color = target.player2Color.value;


        setPlayerName({ 1: player1Name, 2: player2Name })
        setPlayerColor({ 1: player1Color, 2: player2Color })
        setPlayerNameSet(true)

        console.log(player1Name, player1Color, player2Name, player2Color)
    }

    return (
        <div style={{ textAlign: 'center' }}>

            <Heading>Choose name and color</Heading>

            <form onSubmit={onClickSubmit}>


                <Box display="flex" gridGap={4} alignItems="center" justifyContent="space-between">
                    <FormControl>
                        <FormLabel>Enter Player 1 Name</FormLabel>
                        <Input name='player1Name' type='text' />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Enter Player 1 Color</FormLabel>
                        <Select name='player1Color' placeholder='Select color'>
                            <option value='#f6e58d'>Beekeeper</option>
                            <option value='#ffbe76'>Spiced Nector</option>
                            <option value='#ff7979'>Pink Glamour</option>
                        </Select>
                    </FormControl>



                </Box>

                <Divider />

                <Box display="flex" gridGap={4} alignItems="center" justifyContent="space-between">
                    <FormControl>
                        <FormLabel>Enter Player 2 Name</FormLabel>
                        <Input name='player2Name' type='text' />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Enter Player 2 Color</FormLabel>
                        <Select name='player2Color' placeholder='Select color'>
                            <option value='#f6e58d'>Beekeeper</option>
                            <option value='#ffbe76'>Spiced Nector</option>
                            <option value='#ff7979'>Pink Glamour</option>
                        </Select>
                    </FormControl>



                </Box>

                <Button type="submit" style={{ margin: '4px' }} colorScheme='blue'>Submit</Button>
            </form>

        </div>
    )
}


export default PlayerProfile;