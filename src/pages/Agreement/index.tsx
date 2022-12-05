
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import { addTourist } from '../../store/actions/touristActions';
import { useEffect, useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usePagination } from "../../pages/Context";

const Wrapper = styled.div`
    background-color: #7db5d5;
`


export const Agreement = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ nextPage ] = usePagination();

    const [tourist, setTourist] = useState({
        email : "",
    });

    const validTourist = useSelector((state: any) => state.tourist);

    useEffect(() => {
        if(validTourist.valid){
            nextPage();
            navigate('/home');
        }
    }, [validTourist])

    const onHandleKeyDown = (e:any) => {
        if (e.key === 'Enter') {
            const newTourist = {
                ...tourist,
            }
            addTourist(newTourist)(dispatch);
            setTourist({
                ...tourist,
                email: ""
            });

        } 
    }

    return (
        <Wrapper className={`w-screen h-screen py-10 px-14 overflow-auto`}>
            <div className='flex text-white font-Roboto'>
                <div className='basis-2/5 overflow-auto'>
                    <div className='font-black text-6xl uppercase'>
                        <h4 className='pb-16'>
                            WE'RE ABOUT<br/>
                            TO HAND OUR<br/>
                            precious BABY<br/> 
                            to you.
                        </h4>
                        <h4 className='pb-16'>
                            BY SIGNING THIS<br/> 
                            NON-DISCLOSURE<br/>
                            AGREEMENT YOU<br/>
                            AGREE not to<br/>
                            share our BABY<br/>
                            with ANYONE ELSE.
                        </h4>
                    </div>
                    <input type="text" value = {tourist.email} className='placeholder:italic placeholder:text-white rounded-full border-white bg-transparent border-2 text-4xl leading-loose shadow-xl w-full focus:outline-none  focus:border-sky-500 focus:ring-sky-500 focus:ring-1 indent-7 max-w-xl' placeholder='Input your email to continue' name="email" onChange={(e) => setTourist({...tourist, email: e.target.value})} onKeyDown={onHandleKeyDown}/>
                </div>
                <div className='basis-3/5 text-xl leading-6 tracking-normal h-full '>
                    <p>
                        This Mutual Non-Disclosure Agreement (“AGREEMENT”) is entered into as of the Effective Date (below)  by and between [R STONE CONSULTING LIMITED], [N HOUGHTON CREATIVE LTD], and xxxxxx (hereinafter referred to as “PRINCIPAL”) (hereinafter referred to individually as the “PARTY” and collectively as the “Parties.”)
                    </p>
                    <p className='pt-3'>
                        In consideration of the premises and mutual covenants herein set forth, the Parties hereby agree as follows:
                    </p>
                    <h5 className='pt-4'>
                        ARTICLE 1	(DEFINITIONS)
                    </h5>   
                    <h6 className='pt-3'>
                        (1)	For the purpose of this Agreement, the following terms shall have the following meanings, respectively:
                    </h6>
                    <p className='pt-3'>
                        In order to evaluate the potential for, or the expansion of, a business relationship between the parties (“Purpose”), either Party (“Disclosing Party”) may disclose, orally, in writing, electronically, or in some other form, certain information and material which the other party (“Receiving Party”) knows, has reason to know or should know is considered confidential information (“Confidential Information”). Confidential Information includes, but is not limited to, the Purpose, discussions or agreements entered into pursuant to the Purpose, this Agreement, trade secrets, know-how, software programs, documentation, other technology or business related information, discoveries, patentable inventions, inventions, ideas, research, concepts, customer lists, customer data, financial information, and sales, marketing, pricing product and business plans and information. For the purposes of this Agreement, “Purpose” shall be deemed sufficiently broad so as to cover multiple disclosures between the parties on multiple topics. So long as this Agreement is in place between the parties, no new Agreement need be executed to protect a subsequent disclosure – all such disclosures shall be covered by this Agreement. 
                    </p>
                    <p className='pt-3'>
                        “Discussion” means the discussions and/or negotiations conducted by the Parties under this Agreement in relation to [The Game Project]. 
                    </p>
                    <p className='pt-3'>
                        “Related Company” means, with respect to PRINCIPAL, [other entities, etc] and with respect to Company, [R STONE CONSULTING LIMITED], [N HOUGHTON CREATIVE LTD].  
                    </p>
                    <p className='pt-3'>
                        “Representatives” means the directors, officers, financial or legal advisors and employees of the Receiving Party and those of the Related Company who need to have access to Confidential Information in order for the Receiving Party to conduct the Discussion hereunder.
                    </p>
                    <h5 className='pt-4'>
                        ARTICLE 2	(DISCUSSION)
                    </h5>
                    <h6 className='pt-3'>
                        2.1	The Parties will conduct the Discussion for the period from [22] [November] 2022 to [22] [November], 2023, both inclusive.
                    </h6>
                    <h6 className='pt-3'>
                        2.2	Each Party shall pay and bear all costs and expenses incurred by it in connection with the preparation for, the performance of, and participation in the Discussion.
                    </h6>
                    <h6 className='pt-3'>
                        2.3	Notwithstanding Article 2.1 above, each Party may terminate the Discussion at any time for whatever reason by giving a fourteen (14) day prior written notice to the other Party.  Neither Party shall be held liable for any damages or losses (if any) incurred by the other Party arising out of or in connection with such termination.
                    </h6>
                    <h5 className='pt-4'>
                        ARTICLE 3	(CONFIDENTIALITY)
                    </h5>
                    <h6 className='pt-3'>
                        3.1	The Receiving Party shall: 
                    </h6>
                    <p className='pt-3'>
                        a)  use the Confidential Information solely for the purpose of conducting the Discussion;
                    </p>
                    <p className='pt-3'>
                        b)	not disclose, publish or disseminate any Confidential Information to any third party in any way or form without the prior written consent by the Disclosing Party;
                    </p>
                    <p className='pt-3'>
                        c)	treat any Confidential Information with the degree of care no less stringent than with which it treats its own confidential information of like importance, and in any event taking reasonable precautions for its safe custody; 
                    </p>
                    <p className='pt-3'>
                        d)	not manipulate or remove any copyright or trademark notice, or indication of confidentiality on the Confidential Information;
                    </p>
                    <p className='pt-3'>
                        e)  restrict access to Confidential Information to its agents, employees or representatives who have a need to know such information and are prohibited from disclosing the information by a contractual, legal or fiduciary obligation that is no less restrictive than this Agreement; and
                    </p>
                    <p className='pt-3'>
                        f)	not copy, reproduce or otherwise transmit, in whole or in part, the Disclosing Party’s Confidential Information other than to the extent as may be reasonably necessary for the purpose of conducting the Discussion, provided that the Receiving Party shall include the Disclosing Party’s proprietary and confidentiality notice on each such copy or reproduced material; and
                    </p>
                    <p className='pt-3'>
                        g)	not use or refer to any non-public name used by the Disclosing Party (including company or its affiliates, URLs, product and service names) for any purpose
                    </p>
                    <h6 className='pt-3'>
                        3.2	Neither Party shall, without the prior written consent from the other Party, disclose to any third party, nor shall issue any public announcement or statement, the fact that the Discussion is taking place between the Parties or the existence or content of this Agreement.
                    </h6>
                    <h6 className='pt-3'>
                        3.3	Notwithstanding Articles 3.1 and 3.2 above, the Receiving Party may disclose Confidential Information, the fact that the Discussion is taking place between the Parties, or the existence or content of this Agreement to its Representatives and its Related Company who need to know such information in order for the Receiving Party to conduct the Discussion and who are bound to confidentiality obligations either by an agreement or otherwise to the extent not less stringent than the obligations under this Agreement.  Any unauthorised use or unauthorised disclosure of Confidential Information, the existence or content of this Agreement, or the fact that the Discussion is taking place between the Parties by any of the Representatives and the Related Company shall constitute a breach of this Agreement by the relevant Receiving Party.
                    </h6>
                    <h6 className='pt-3'>
                        3.4	The obligations under Articles 3.1, 3.2 and 3.3 shall not apply to any information which:
                    </h6>
                    <p className='pt-3'>
                        a)	is in the public domain at the time of its disclosure under this Agreement;
                    </p>
                    <p className='pt-3'>
                        b)	comes into the public domain following disclosure under this Agreement otherwise than by an act or omission of the Receiving Party or its Related Company;
                    </p>
                    <p className='pt-3'>
                        c)	was in the lawful possession of the Receiving Party prior to and independently of the disclosure by the Disclosing Party under this Agreement free of any restriction as to its use or disclosure prior to it being so disclosed; or
                    </p>
                    <p className='pt-3'>
                        d)	was developed by or became available to the Receiving Party following disclosure under this Agreement from a source other than the Disclosing Party without incurring any confidentiality obligation;
                    </p>
                    <p className='pt-3'>
                        - and the Party seeking the benefit of the above exception shall bear the burden of proving its existence.
                    </p>
                    <h6 className='pt-3'>
                        3.5	The Receiving Party is only permitted to disclose Confidential Information if required by law or regulation (including, but not limited to, rules or regulations of a stock exchange on which the securities of the Receiving Party or those of its Related Company are listed or quoted), provided however, that the Receiving Party shall: 
                    </h6>
                    <p className='pt-3'>
                        a)	give the Disclosing Party written notice promptly upon receipt of a disclosure requirement before any disclosure is made; and
                    </p>
                    <p className='pt-3'>
                        b)	disclose only the Confidential Information that is required by that law or regulation.
                    </p>
                    <h6 className='pt-3'>
                        3.6	The Receiving Party acknowledges that a breach of this Agreement may cause the Disclosing Party irreparable damage for which monetary indemnity would not be an adequate remedy.  Accordingly, in addition to other remedies that may be available, the Disclosing Party may seek and obtain injunctive relief against such a breach or a threatened breach.
                    </h6>
                    <h5 className='pt-4'>
                        ARTICLE 4	(LIMITATION OF LIABILITY)
                    </h5>
                    <h6 className='pt-3'>
                        4.1  The Confidential Information is delivered “AS IS” and all representations and warranties,      express or implied, are hereby disclaimed, including but not limited to, that: 
                    </h6>  	
                    <p className='pt-3'>
                        a)	the Confidential Information is accurate or fits for any particular purpose; and  
                    </p>
                    <p className='pt-3'>
                        b)	the use of the Confidential Information does not infringe any rights that may be held by a third party in respect of any such information.
                    </p>
                    <h5 className='pt-4'>
                        ARTICLE 5	(INTELLECTUAL PROPERTY)
                    </h5>
                    <h6 className='pt-3'>
                        5.1	It is understood that the Discussion itself will not be intended to develop any proprietary works containing any type of intellectual property rights.  Should any proprietary works be developed during the course of the Discussion, the Parties shall discuss and negotiate in good faith, and execute a separate agreement stipulating the terms and conditions of the treatment and ownership of such proprietary works.
                    </h6>
                    <h6 className='pt-3'>
                        5.2	The ownership of, interest in, and any other rights (including patent, utility model, copyright or any other intellectual property rights) contained in or pertaining to the Confidential Information shall be at all times retained by the Disclosing Party.  No license of any patent, utility model, copyright or any other intellectual property right is granted or conveyed to the Receiving Party by the Disclosing Party except the limited right to use the Confidential Information as described in this Agreement.
                    </h6>
                    <h5 className='pt-4'>
                        ARTICLE 6	(NO OBLIGATION)
                    </h5>
                    <h6 className='pt-3'>
                        6.1	The Parties acknowledge and agree that this Agreement or any disclosure of Confidential Information creates no obligation upon either Party to enter into any further agreement or contract, such as a contract to offer or take a license, a contract to sell or purchase any product or service, or to assign any development work in any manner; and this Agreement is neither intended to nor will be evidence of a business association between the parties.
                    </h6>
                    <h6 className='pt-3'>
                        6.2	Each Party shall be entitled to make its independent decision in evaluating the result of the Discussion and shall be free to make its decision whether or not to proceed to any further phase at its own full discretion.  For the avoidance of doubt, neither Party shall be liable or responsible to the other Party with regard to such decision.
                    </h6>
                    <h6 className='pt-3'>
                        6.3	The Parties acknowledge and agree that each Party may currently or in the future develop information, or receive information from any third party, that is similar to the Confidential Information of the Disclosing Party.  So long as the Parties comply with the provisions in this Agreement, the Parties are not restricted from:
                    </h6>
                    <p className='pt-3'>
                        a)	discussing with any third party any subject matter which is the same as or similar to the Discussion; or
                    </p>
                    <p className='pt-3'>
                        b)	developing any product, system or whatsoever by itself or by any third party which is the subject of the Discussion.
                    </p>
                    <h5 className='pt-4'>
                        ARTICLE 7	(RETURN OF THE CONFIDENTIAL INFORMATION)
                    </h5>
                    <p className='pt-3'>
                        After the expiration or termination of this Agreement in accordance with Article 8.1 below, or sooner upon the Disclosing Party’s request, the Receiving Party shall, at the option and instruction of the Disclosing Party, return promptly to the Disclosing Party all Confidential Information and/or destroy any materials in its possession or control which contain any Confidential Information.
                    </p>
                    <h5 className='pt-4'>
                        ARTICLE 8	(TERM OF THIS AGREEMENT)
                    </h5>
                    <h6 className='pt-3'>
                        8.1	This Agreement shall become effective on the Effective Date and expire at the end of the Discussion in accordance with Article 2.1 or 2.3 hereof.
                    </h6>
                    <h6 className='pt-3'>
                        8.2	Notwithstanding Article 8.1 above, Articles 3, 7, 8 and 9 shall survive any expiration or termination of this Agreement for a period of two (2) years from the date of such expiration or termination.
                    </h6>
                    <h5 className='pt-4'>
                        ARTICLE 9	(MISCELLANEOUS)
                    </h5>
                    <h6 className='pt-3'>
                        9.1	No Assignment:  Neither Party shall assign, delegate or transfer, in whole or in part, any of its rights and/or obligations under this Agreement to any third party without the prior written consent of the other Party.
                    </h6>
                    <h6 className='pt-3'>
                        9.2	No Waiver:  No failure or delay by either Party in exercising any right, power or privilege under this Agreement shall operate as a waiver thereof, and any single or partial exercise by either Party of any right, power or privilege under this Agreement shall not preclude further exercise of such right, power or privilege, nor preclude exercise of any other right, power or privilege available under this Agreement or under any applicable law.
                    </h6>
                    <h6 className='pt-3'>
                        9.3	Severability:  If any of the provisions contained in this Agreement shall be declared invalid, illegal or unenforceable in any respect under any applicable law, the validity, legality and enforceability of the remaining provisions contained herein shall not in any way be affected or impaired.
                    </h6>
                    <h6 className='pt-3'>
                        9.4	Entire Agreement:  This Agreement constitutes the entire agreement between the Parties with respect to the subject matter hereof, and supersedes all prior agreements, discussions and understandings with respect to the subject matter hereof.  This Agreement may not be amended, changed or modified unless agreed by the Parties in writing.
                    </h6>
                    <h6 className='pt-3'>
                        9.5	Notice:  Any notice required or permitted to be given under this Agreement shall be given in writing by personal delivery, certified or registered mail, or facsimile and shall be addressed to the nominated addressees set forth below:
                    </h6>
                    <p className='pt-3'>
                        (Fax)	 
                    </p>
                    <p className='pt-3'>
                        or such other address as the Party has notified the other Party in accordance with this Article.  Unless otherwise proved, the notice shall be deemed to have been served:
                    </p>
                    <p className='pt-3'>
                        1)  if by personal delivery, upon the delivery;
                    </p>
                    <p className='pt-3'>
                        2)  if by certified or registered mail, forty eight (48) hours after posting; or
                    </p>
                    <p className='pt-3'>
                        3)  if by facsimile, upon the confirmation of its remittance.
                    </p>
                    <h6 className='pt-3'>
                        9.6	Compliance with Laws:  Each Party agrees to comply with all applicable laws and regulations, including, but not limited to, laws and regulations relating to the export and/or re-export of technical data, documentation and/or products insofar as they relate to the information disclosed under this Agreement.  Both parties will adhere to any applicable laws regarding data protection and privacy or personal information.
                    </h6>
                    <h6 className='pt-3'>
                        9.7	Governing Law:  This Agreement shall be governed by and construed in accordance with the laws of England and Wales without regard to the principles of its conflict of laws.
                    </h6>
                    <h6 className='pt-3'>
                        9.8	Arbitration:  All disputes, controversies or differences of opinion arising from or related to this Agreement between the Parties shall be settled amicably.  In the event that an amicable settlement cannot be reached through such negotiation within thirty (30) days from the beginning of such negotiation, such disputes shall be finally settled by arbitration conducted in United Kingdom, pursuant to the Rules of Arbitration of the International Chamber of Commerce.  The tribunal shall consist of three (3) arbitrators appointed in accordance with the said Rules, and the arbitration shall be conducted in English. The award thereof shall be final and binding upon the Parties and may be entered into any court having jurisdiction thereof for its enforcement.  The prevailing Party shall be entitled to recover reasonable attorneys’ fees.  Notwithstanding the foregoing, nothing in this Article 9.8 shall prevent the Parties from seeking any injunctive or equitable relief, including specific performance, by a court of competent jurisdiction in accordance with Article 3.6.
                    </h6>
                    <p className='pt-3'>
                        IN WITNESS WHEREOF, the Parties have caused this Agreement to be executed by their duly authorised representatives as of the date first above written:
                    </p>
                </div>
            </div>
        </Wrapper>
    )
}

export default Agreement