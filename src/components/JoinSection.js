import React from 'react';
import { InfoRow, InfoColumn, Form, FormWrap, FormContent,
FormLabel, FormInput, FormButton, JoinSec } from './styled-components.js'


const JoinSection = (formStart) => {
return (
<>
<JoinSec>
<InfoRow formStart={formStart}>
<InfoColumn>
<FormWrap>
<FormContent>
<Form action="#">
<FormLabel htmlForm='for'>Name:</FormLabel>
<FormInput typer='name' required />
<FormLabel htmlForm='for'>Email:</FormLabel>
<FormInput typer='email' required />
<FormLabel htmlForm='for'>Password:</FormLabel>
<FormInput typer='password' required />
<FormButton type='Submit'>Join Now</FormButton>
</Form>
</FormContent>
</FormWrap>
</InfoColumn>
</InfoRow>

</JoinSec>
</>
)
}
                                                                                 
export default JoinSection;
