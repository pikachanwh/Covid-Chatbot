function getBotResponse(input) {
    var input = input.toLowerCase();
    var json = [
        {
          "qa_id": 1,
          "q_id": "EQ001",
          "q_text": "what is the origin of COVID-19",
          "answer_text": "Sars-cov-2 is thought to be originated from an animal coronavirus that successfully adapted to humans. The species of origin of sars-cov-2 has not been fully identified, but the virus seems to be related to sars-cov and other coronaviruses found in bats and other mammal species. The first cases of the novel coronavirus associated disease (covid-19) have been traced to the Chinese province of Hubei in early December 2019. Although the actual index case is not really known, the first sequence of the novel coronavirus was produced within weeks from the emergence of the disease.",
          "doc_id": "0hldozml"
        },
        {
          "qa_id": 2,
          "q_id": "EQ002",
          "q_text": "how does the coronavirus respond to changes in the weather",
          "answer_text": "Temperature and relative humidity are major factors determining virus inactivation in the environment. Temperature and relative humidity have been shown to impact the kinetics of inactivation of coronaviruses. Increased temperatures have been shown to increase the rate of the inactivation, and decreased relative humidity have been associated with a reduction of coronaviruses inactivation rate on surfaces. Inactivation rates were lower in suspensions compared to surfaces in studies that tested both suspensions and surfaces at similar temperatures. Hence, the prediction of the persistence of SARS-CoV-2 on fomites is essential to investigate the importance of contact transmission.",
          "doc_id": "4hbwg18z"
        },
        {
          "qa_id": 3,
          "q_id": "EQ005",
          "q_text": "what drugs have been active against SARS-CoV or SARS-CoV-2 in animal studies?",
          "answer_text": "Favipiravir is a nucleoside analog with an ability to inhibit RNA-dependent polymerase and was approved for marketing in Japan in 2014. In vitro experiments have shown that favipiravir is effective for COVID-19 and that its EC 50 is 61.88 M. To date, some clinical trials of favipiravir in the treatment of COVID-19 have been carried out in China. Recent clinical studies have found that compared with the antiviral drug arbidol, the clinical effect of favipiravir is more significant. Nucleic acid positive-to-negative time, mean antipyretic time and cough remission time were all better than those of the arbidol group.\r\nRemdesivir(GS-5734) Remdesivir was first used to treat Ebola virus, and it has completed phase 2 clinical trials. As a nucleoside analog, it can interact with RdRp, and the triphosphate form of remdesivir will compete with adenosine triphosphate, leading to delayed chain termination and inhibiting viral replication and transcription. number of in vitro studies have shown that remdesivir has inhibitory effects on a variety of human and animal coronaviruses.",
          "doc_id": "1kzy7rts"
        },
        {
          "qa_id": 5,
          "q_id": "EQ007",
          "q_text": "are there serological tests that detect antibodies to coronavirus?",
          "answer_text": "The serological tests that have recently been developed employ different methods and target either IgG or IgM or both. In an attempt to fill the knowledge gap, this systematic review summarized evidence from 38 studies involving 7848 individuals. Although the US Food and Drug Administration (FDA) has approved ELISA, LFIA, and neutralization assays, we included in the present meta-analysis studies using CLIA and FIA methods as well, because they can potentially be approved in the future. We did not consider neutralization assays since they are more time demanding (3-5 days) and can only be performed in laboratories of Biosafety Level-3 (BSL-3) . The meta-analysis showed that all methods yielded high specificity with some of the methods (ELISA and LFIA) reaching levels higher than 99%. ELISA-and CLIA-based methods performed better in terms of sensitivity (90-96%) followed by LFIA and FIA with sensitivities ranging from 80% to 89%.",
          "doc_id": "3aoxplp3"
        },
        {
          "qa_id": 6,
          "q_id": "EQ011",
          "q_text": "what are the guidelines for triaging patients infected with coronavirus?",
          "answer_text": "COVID-19 illuminates the need for a tiered diagnostic approach to rapidly identify clinically significant infections and reduce disease spread. Without the ability to efficiently screen patients, hospitals are overwhelmed, potentially delaying treatment for other emergencies. A multi-tiered, diagnostic strategy incorporating a rapid host immune response assay as a screening test, molecular confirmatory testing and rapid IgM/IgG testing to assess benefit from quarantine/further testing and provide information on population exposure/herd immunity would efficiently evaluate potential COVID-19 patients. Triaging patients within minutes with a fingerstick rather than hours/days after an invasive swab is critical to pandemic response as reliance on the existing strategy is limited by assay accuracy, time to results, and testing capacity. Early screening and triage is achievable from the outset of a pandemic with point-of-care host immune response testing which will improve response time to clinical and public health actions. ",
          "doc_id": "hpyh2dxy"
        },
        {
          "qa_id": 7,
          "q_id": "EQ013",
          "q_text": "what are the transmission routes of coronavirus?",
          "answer_text": "Current information suggests that the two main routes of transmission of the COVID-19 virus are respiratory droplets and contact. Vertical transmission has also been reported. Respiratory droplets are generated when an infected person coughs or sneezes. Any person who is in close contact (within 1 m) with someone who has respiratory symptoms (coughing, sneezing) is at risk of being exposed to potentially infective respiratory droplets. Droplets may also land. Studies have shown that SARS corona virus can survive on plastered walls, stainless steel surfaces, plastics and even glass slides from 24-72 hours. It is stable in feces and urine for at least 1-2 days. Hence, all the surfaces should be disinfected as they can act as potential source of infection before commencing and after finishing the procedures.",
          "doc_id": "046s47v6"
        },
        {
          "qa_id": 8,
          "q_id": "EQ018",
          "q_text": "what are the best masks for preventing infection by Covid-19?",
          "answer_text": "Due to the characteristics of the virus, the standard protective measures of daily workflow do not prevent the infection, and specific masks (N-95 or FFP2 or higher) or powered air-purifying respirator (PAPR), other personal protective equipment (PPE) and dedicated sterilization measures should be implemented to avoid the infection.",
          "doc_id": "a0k4o3v3"
        },
        {
          "qa_id": 9,
          "q_id": "EQ020",
          "q_text": "are patients taking Angiotensin-converting enzyme inhibitors (ACE) at increased risk for COVID-19?",
          "answer_text": "Many of the patients are treating with angiotensin-converting enzyme inhibitor (ACEI) or angiotensin II receptor blocker (ARB). There has been considerable debate in scientific community and health professionals about whether angiotensin converting enzyme (ACE) inhibitors and angiotensin receptor blockers (ARBs) may increase attractiveness towards the COVID-19 virus infection or not. One of the important concern highlighted by these studies involving antihypertensive medications suggested that these drugs might cause increments in abundance of SARS-CoV-2 receptor henceforth causing COVID-19 by entering into cells. This suggests plausible increase in ACE2 receptors on lung and heart cells and hence offering more entry points for SARS-CoV-2. However, no strong evidence has been noted.",
          "doc_id": "0x02bmti"
        },
        {
          "qa_id": 10,
          "q_id": "EQ021",
          "q_text": "what are the mortality rates overall and in specific populations",
          "answer_text": "The outbreak of SARS-CoV-2 has become a pandemic with significant mortality. Published studies describing clinical characteristics of the disease contain small cohorts from individual centers or larger series consisting of mixed series from multiple different hospitals. We report here analyses of mortality and disease severity among 402 patients from a single hospital. The cohort includes 297 patients with confirmed and 105 with clinical diagnosis. The latter group consists of cases with inconclusive nucleic acid test but meeting the criteria for clinical diagnosis. Data are compared between genders and among different age groups. The overall case fatality is 5.2%. However, age at 70 years or older is associated with a significantly higher mortality (17.8%) and higher rate of severe and critical illness (57.5%). Case fatality is 8% in patients 50 years of age or older, and 1.2% in those younger than 50 years. In addition, case fatality is 7.6% in male patients, as opposed to 2.9% in females, demonstrating a clear gender difference.",
          "doc_id": "iygfzqx5"
        },
        {
          "qa_id": 11,
          "q_id": "EQ022",
          "q_text": "are cardiac complications likely in patients with COVID-19?",
          "answer_text": "COVID-19 can cause a severe infection with serious effects in patients with heart disease. Importantly, patients with cardiovascular disease (CVD) have a higher risk of severe symptoms and death. In addition, COVID-19 infection has been associated with multiple direct and indirect complications in the cardiovascular system, such as acute myocardial damage, myocarditis, arrhythmias, and thromboembolic disease. Moreover, the treatments under investigation for COVID-19 can have secondary cardiovascular effects. These interactions mean that patients standard drug therapies are frequently discontinued during their admission, which can lead to decompensation of the underlying heart condition. Furthermore, polypharmacy involving antipsychotic drugs and other antibiotics that prolong the QT interval can contribute to cardiotoxicities related to these drug combinations in older patients.",
          "doc_id": "9f7up1nq"
        },
        {
          "qa_id": 12,
          "q_id": "EQ023",
          "q_text": "what kinds of complications related to COVID-19 are associated with hypertension?",
          "answer_text": "Several reports have denoted the incidence and types of adverse cardiovascular events associated with COVID-19. In one early experience from Wuhan, China, arrhythmias were present in 16.7% of hospitalized patients, with 7.2% experiencing acute cardiac injury. In a subsequent report, cardiac injury, defined as high-sensitivty troponin I levels above the 99th-percentile upper reference limit, occurred in 19.7% of patients, occurring most frequently among older patients and in those with comorbidities. The presence of cardiac injury was associated with a more severe disease course, with a higher proportion of patients with acute respiratory distress syndrome, acute kidney injury, and coagulation disorders, compared to those without cardiac injury.",
          "doc_id": "8obqdbh9"
        },
        {
          "qa_id": 13,
          "q_id": "EQ025",
          "q_text": "which biomarkers predict the severe clinical course of 2019-nCOV infection?",
          "answer_text": "The novel coronavirus might mainly act on lymphocytes, especially T lymphocytes. Surveillance of NLR and lymphocyte subsets is helpful in the early screening of critical illness, diagnosis and treatment of COVID-19.",
          "doc_id": "0g7wy4yw"
        },
        {
          "qa_id": 14,
          "q_id": "EQ026",
          "q_text": "what are the initial symptoms of Covid-19?",
          "answer_text": "The symptoms of this COVID-19 are somewhat is same is that of MERS-CoV. Symptoms include mild flu, such as fever, cough, difficulty in breathing, pain in the muscles and tiredness. More serious cases develop pneumonia, acute respiratory distress syndrome, sepsis and septic shock that can lead to the death of the patients. ",
          "doc_id": "2uxptj0y"
        },
        {
          "qa_id": 15,
          "q_id": "EQ029",
          "q_text": "which SARS-CoV-2 proteins-human proteins interactions indicate potential for drug targets. Are there approved drugs that can be repurposed based on this information?",
          "answer_text": "Results of the presented in silico analysis suggest the following:  the newly emerging SARS-CoV-2 is highly related to SARS-CoV and, to a lesser degree, MERS-CoV, and ACE2 is a likely receptor of it; civets and poultry are potential candidates for the natural reservoir of the SARS-CoV-2, human actin proteins possibly participate in attachment/internalization of SARS-CoV-2, drugs which interact with actin proteins (e.g. ibuprofen) should be investigated as possible therapeutics for treatment of SARS-CoV-2 infection, and domain 266-330 of S1 protein from the SARS-CoV-2 represents promising therapeutic and/or vaccine target.",
          "doc_id": "3bc72zgr"
        },
        {
          "qa_id": 16,
          "q_id": "EQ030",
          "q_text": "is remdesivir an effective treatment for COVID-19",
          "answer_text": "In animal models, remdesivir treatment was effective against MERS-CoV and SARS-CoV infection. In vitro, remdesivir inhibited replication of SARS-CoV-2. Therapeutic remdesivir treatment initiated early during infection had a clinical benefit in SARS-CoV-2-infected rhesus macaques.",
          "doc_id": "1cph1uij"
        },
        {
          "qa_id": 17,
          "q_id": "EQ034",
          "q_text": "What are the longer-term complications of those who recover from COVID-19?",
          "answer_text": "Peripheral inflammation caused by COVID-19 may have long-term consequences in those that recover, leading to chronic medical conditions such as dementia and neurodegenerative disease, likely through neuroinflammatory mechanisms that can be compounded by an unhealthy diet.",
          "doc_id": "b999y89f"
        },
        {
          "qa_id": 19,
          "q_id": "EQ036",
          "q_text": "What is the protein structure of the SARS-CoV-2 spike?",
          "answer_text": "Spike protein of SARS-CoV-2 is 1273 amino acid long protein with two functionally distinct regions, S1 and S2, involved in the attachment and entry of the virus, respectively. SARS-CoV-2 entry in the host cell is mediated by proteolytic cleavage of its spike protein, a process dubbed as priming. Recently, human Transmembrane Protease Serine 2 (TMPRSS2) has been shown to carry out the priming of the SARS-CoV-2 spike protein by generating two distinct fragments of the viral spike protein, S1/S2 and S2-",
          "doc_id": "34ljq0qt"
        },
        {
          "qa_id": 20,
          "q_id": "EQ037",
          "q_text": "What is the result of phylogenetic analysis of SARS-CoV-2 genome sequence?",
          "answer_text": "Since the SARS-CoV-2 has characteristics typical of the coronavirus family, it is currently classified in the lineage B betacoronaviruses that also include severe acute respiratory syndrome (SARS) and middle eastern respiratory syndrome (MERS). Although the source of the SARS-CoV-2 is still under investigation, genome sequencing and phylogenetic analysis proved that the sequence of RNA genome of the virus is similar to bat coronaviruses, indicating the bats maybe the primary source.",
          "doc_id": "1ggrjy9b"
        },
        {
          "qa_id": 22,
          "q_id": "EQ039",
          "q_text": "What is the mechanism of cytokine storm syndrome on the COVID-19?",
          "answer_text": "COVID-19 produces a severe systemic inflammatory reaction, likely the result of increased free heme levels and decreased levels of HO-1 activity and functional hemoprotein. The spike protein of COVID-19 binds ACE-2 receptors and porphyrin molecules with weak and strong affinity, respectively. Porphyrins are the building blocks of heme and allow COVID-19 access to invade cells along with ACE-2 receptors and bind functional hemoprotein within the cell. The resulting COVID-porphyrin complex may lead to an impairment of HO-1 function and an upregulation of pro-inflammatory free heme and iron, which overwhelms the anti-inflammatory cytoprotection of HO-1.",
          "doc_id": "09xbwchi"
        },
        {
          "qa_id": 23,
          "q_id": "EQ040",
          "q_text": "What are the observed mutations in the SARS-CoV-2 genome and how often do the mutations occur?",
          "answer_text": "Forty-two missense mutations were identified in all the major non-structural and structural proteins, except the envelope protein.",
          "doc_id": "0nh58odf"
        },
        {
          "qa_id": 24,
          "q_id": "EQ041",
          "q_text": "What are the impacts of COVID-19 among African-Americans that differ from the rest of the U.S. population?",
          "answer_text": "African American have been severely affected by COVID-19 noted with the rising mortality rates within the African American community. Health disparities, health inequities and issues with systemic health access are some of the pre-existing issues African American were subjected to within the southern states in the United States.",
          "doc_id": "8yvu9xhw"
        },
        {
          "qa_id": 25,
          "q_id": "EQ045",
          "q_text": "How has the COVID-19 pandemic impacted mental health?",
          "answer_text": "Key mental health outcomes were Post-Traumatic Stress Disorder symptoms (PTSD), severe depression, anxiety, insomnia and perceived stress.",
          "doc_id": "01d8cqn4"
        },
        {
          "qa_id": 28,
          "q_id": "CQ001",
          "q_text": "what is the origin of COVID-19",
          "answer_text": "Coronavirus Disease 2019 (COVID-19) is a virus identified as the cause of an outbreak of respiratory illness first detected in Wuhan, China.",
          "doc_id": "c2e4cf4dfeb981d78ed6093b549538bc38951ac5"
        },
        {
          "qa_id": 29,
          "q_id": "CQ002",
          "q_text": "how does the coronavirus respond to changes in the weather",
          "answer_text": "It is not yet known whether weather and temperature affect the spread of COVID-19. Some other viruses, like those that cause the common cold and flu, spread more during cold weather months but that does not mean it is impossible to become sick with these viruses during other months. There is much more to learn about the transmissibility, severity, and other features associated with COVID-19 and investigations are ongoing.",
          "doc_id": "95534418522ff422077fa28cb7dd5e824d6841a4"
        },
        {
          "qa_id": 30,
          "q_id": "CQ005",
          "q_text": "are there any drugs that work for SARS-CoV or SARS-CoV-2 in animals?",
          "answer_text": "Some types of HIV medicine (for example, lopinavir-ritonavir) to treat COVID-19 are being evaluated. Results from a clinical trialexternal icon in China showed that lopinavir-ritonavir did not speed up recovery or reduce the amount of virus produced in patients hospitalized with COVID-19 and pneumonia.",
          "doc_id": "e62ce07b30f413637130df1c73bc482dcbd44f6d"
        },
        {
          "qa_id": 31,
          "q_id": "CQ007",
          "q_text": "are there blood tests that detect antibodies to coronavirus?",
          "answer_text": "Serology testing is used to detect previous infection (antibodies to MERS-CoV) in people who may have been exposed to the virus.",
          "doc_id": "02cb8618e0100e5c02bed887a9c1f315ed03335e"
        },
        {
          "qa_id": 32,
          "q_id": "CQ013",
          "q_text": "how does coronavirus spread?",
          "answer_text": "The virus that causes COVID-19 is thought to spread mainly from person to person, mainly through respiratory droplets produced when an infected person coughs or sneezes. These droplets can land in the mouths or noses of people who are nearby or possibly be inhaled into the lungs. Spread is more likely when people are in close contact with one another (within about 6 feet).",
          "doc_id": "95534418522ff422077fa28cb7dd5e824d6841a4"
        },
        {
          "qa_id": 34,
          "q_id": "CQ020",
          "q_text": "are patients taking Angiotensin-converting enzyme inhibitors (ACE) inhibitors at increased risk for COVID-19?",
          "answer_text": "CDC is currently not aware of scientific evidence establishing a link between ACE-I or ARBs and risk of contracting or severity of COVID-19.",
          "doc_id": "2df2dc3d8b76620f4ec17069986e7b182f59072d"
        },
        {
          "qa_id": 35,
          "q_id": "CQ025",
          "q_text": "which tests indicate severe covid infection?",
          "answer_text": "Diagnosis of COVID-19 requires detection of SARS-CoV-2 RNA by reverse transcription polymerase chain reaction (RT-PCR). Detection of SARS-CoV-2 viral RNA is better in nasopharynx samples compared to throat samples.33,50 Lower respiratory samples may have better yield than upper respiratory samples.33,50. SARS-CoV-2 RNA has also been detected in stool and blood.13,34,47,51 Detection of SARS-CoV-2 RNA in blood may be a marker of severe illness.",
          "doc_id": "3c1fcdf12bf53c47f76b573dd52d440fe1a7a8aa"
        },
        {
          "qa_id": 36,
          "q_id": "CQ026",
          "q_text": "what are the early symptoms of COVID-19?",
          "answer_text": "Symptoms can include fever, cough and shortness of breath. Symptoms may appear 2-14 days after exposure.",
          "doc_id": "1e70c19ffe4b7f50bfba1d3f9b836243fe6bc996"
        },
        {
          "qa_id": 37,
          "q_id": "CQ029",
          "q_text": "are there any existing drugs that could repurposed to treat COVID-19?",
          "answer_text": "Some types of HIV medicine (for example, lopinavir-ritonavir) to treat COVID-19 are being evaluated.",
          "doc_id": "e62ce07b30f413637130df1c73bc482dcbd44f6d"
        },
        {
          "qa_id": 38,
          "q_id": "CQ030",
          "q_text": "is remdesivir an effective treatment for COVID-19?",
          "answer_text": "Remdesivir is an investigational antiviral drug that has been reported to have in-vitro activity against SARS-CoV-2. Some adult patients with COVID-19 have received intravenous remdesivir through clinical trials or compassionate use, although remdesivir has not been used for treatment of children with COVID-19.",
          "doc_id": "da4b78ce412fbc1076a0a9768817df33b977cec4"
        },
        {
          "qa_id": 39,
          "q_id": "CQ034",
          "q_text": "what are the long-term complications for people who recover from COVID-19?",
          "answer_text": "Older adults and people of any age who have serious underlying medical conditions may be at higher risk for more severe complications from COVID-19.",
          "doc_id": "58c0fc903ad4636156f8cb363cb9731bb973f5d1"
        },
        {
          "qa_id": 40,
          "q_id": "CQ003",
          "q_text": "will SARS-CoV2 infected people develop immunity?",
          "answer_text": "Based on the trajectory of antibody decline, researchers have predicted that the immune response following infection would continue to provide at least 50% protection against reinfection for 1–2 years following initial infection with SARS-CoV-2 or vaccination",
          "doc_id": "829e00343f3711ed9b2ab0227aed472f"
        },
        {
          "qa_id": 41,
          "q_id": "CQ009",
          "q_text": "how has COVID-19 affected Canada",
          "answer_text": "COVID-19 continues to impact Canadians, with approximately 132,000 hospitalizations and over 35,000 deaths to date. Canadians continue to respond—over 30 million people are fully vaccinated.",
          "doc_id": "8f15d1cb3f3711edbd8db0227aed472f"
        },
        {
          "qa_id": 42,
          "q_id": "CQ010",
          "q_text": "has social distancing had an impact on slowing the spread of COVID-19?",
          "answer_text": "Social distancing orders have been enacted worldwide to slow the coronavirus disease (COVID-19) pandemic, reduce strain on healthcare systems, and prevent deaths.",
          "doc_id": "9241fbb43f3711ed8a49b0227aed472f"
        },
        {
          "qa_id": 43,
          "q_id": "CQ018",
          "q_text": "what are the best masks for preventing infection by COVID-19?",
          "answer_text": "Recommended medical masks for healthcare providers are respirators such as N95 and surgical 3 ply masks. Other than health care workers, the surgical 3 ply masks is also indicated for those with COVID-19 symptoms and those taking care of someone suspected (PUI) or confirmed COVID-19.",
          "doc_id": "a7ce53903f3711ed8f04b0227aed472f"
        },
        {
          "qa_id": 44,
          "q_id": "CQ022",
          "q_text": "are heart complications likely in patients with COVID-19?",
          "answer_text": "Myocardial injury (as reflected in elevated cardiac troponin levels) is common among patients hospitalized with COVID-19, but the cause in individual patients is frequently not identified. The presence and magnitude of troponin elevation is associated with more severe disease and worse outcomes.",
          "doc_id": "b0977ce73f3711edb6bcb0227aed472f"
        },
        {
          "qa_id": 45,
          "q_id": "CQ031",
          "q_text": "how does the coronavirus differ from seasonal flu?",
          "answer_text": "Influenza (flu) and COVID-19 are both contagious respiratory illnesses, but they are caused by different viruses. COVID-19 is caused by infection with a coronavirus first identified in 2019. Flu is caused by infection with a flu virus (influenza viruses). From what we know, COVID-19 spreads more easily than flu.",
          "doc_id": "bf07305d3f3711ed98cfb0227aed472f"
        },
        {
          "qa_id": 46,
          "q_id": "CQ038",
          "q_text": "how does COVID-19 cause or contribute to inflammation?",
          "answer_text": "They found that SARS-CoV-2 can infect monocytes — immune cells in the blood that act as “sentinels” or early responders to infection — which subsequently undergo pyroptosis leading to more severe systemic inflammation.",
          "doc_id": "c4d2ffa43f3711ed8c8fb0227aed472f"
        },
        {
          "qa_id": 47,
          "q_id": "CQ039",
          "q_text": "what is a cytokine storm and how is it related to COVID-19?",
          "answer_text": "COVID-19 can trigger a cytokine storm in pulmonary tissues through hyperactivation of the immune system and the uncontrolled release of cytokines. The phrase “cytokine storm” is a descriptive term to encompass a variety of events that may ultimately result in multi-organ failure and death.",
          "doc_id": "c8b3075b3f3711ed9fd1b0227aed472f"
        },
        {
          "qa_id": 48,
          "q_id": "CQ045",
          "q_text": "how has the COVID-19 pandemic impacted mental health?",
          "answer_text": "Plenty of us became more anxious; but for some COVID-19 has sparked or amplified much more serious mental health problems. A great number of people have reported psychological distress and symptoms of depression, anxiety or post-traumatic stress.",
          "doc_id": "d4d75f083f3711ed8f90b0227aed472f"
        },
        {
          "qa_id": 49,
          "q_id": "CQ046",
          "q_text": "what kinds of tests are there for COVID-19?",
          "answer_text": "Types of Tests Viral tests look for a current infection with SARS-CoV-2, the virus that causes COVID-19, by testing specimens from your nose or mouth. There are two main types of viral tests: nucleic acid amplification tests (NAATs) and antigen tests.",
          "doc_id": "c18cc737408a11ed88bcb0227aed472f"
        },
        {
          "qa_id": 50,
          "q_id": "CQ047",
          "q_text": "Does Vitamins prevent COVID-19?",
          "answer_text": "Based on the science, there is reason to be hopeful that supplements such as vitamin C or D, zinc, or melatonin might help in the fight against COVID-19. While there is no proof yet that they do, additional research could show a benefit in certain situations, or with a different dose or formulation of the supplement.",
          "doc_id": "7fdfad8a408b11ed8db7b0227aed472f"
        },
        {
          "qa_id": 52,
          "q_id": "CQ048",
          "q_text": "What are the complications of COVID-19?",
          "answer_text": "COVID-19 complications => Acute Respiratory Failure. Pneumonia. Acute Respiratory Distress Syndrome (ARDS). Acute Liver Injury. Acute Cardiac Injury. Secondary Infection. Acute Kidney Injury. Septic Shock.",
          "doc_id": "2a528ddf408c11ed9f76b0227aed472f"
        },
        {
          "qa_id": 54,
          "q_id": "CQ049",
          "q_text": "Is covid-19 serious?",
          "answer_text": "Although most people with COVID-19 have mild to moderate symptoms, the disease can cause severe medical complications and lead to death in some people. Older adults or people with existing medical conditions are at greater risk of becoming seriously ill with COVID-19 .",
          "doc_id": "c7d98c34408c11edbf34b0227aed472f"
        },
        {
          "qa_id": 55,
          "q_id": "CQ050",
          "q_text": "Does adequate sleep prevent COVID-19?",
          "answer_text": "Ample sleep supports the immune system, which reduces the risk of infection and can improve outcomes for people fighting a virus. On the other hand, sleep deprivation weakens the body's defense system and makes people more vulnerable to contracting a virus.",
          "doc_id": "cdd31e1f408d11edab67b0227aed472f"
        },
        {
          "qa_id": 56,
          "q_id": "CQ051",
          "q_text": "Which of the COVID-19 vaccines will be most effective and safe?",
          "answer_text": "The Pfizer and Moderna vaccines are strongly recommended as safe and effective at preventing serious illness or death from COVID-19.",
          "doc_id": "7106cc3d408e11ed8f4ab0227aed472f"
        }
    ]
    
    var keywords = new Array(json.length);
    keywords[0] = Array("sars-cov-2", "origin", "covid-19", "animal coronavirus", "chinese province of hubei");
    keywords[1] = Array("temperature", "humidity", "major factors determining virus inactivation", "increased temperatures", "increase the rate of the inactivation", "decreased relative humidity", "reduction of coronaviruses inactivation", "prediction of the persistence of sars-cov-2 on fomites", "contact transmission")
    keywords[2] = Array("favipiravir", "nucleoside analog", "inhibit rna-dependent polymerase", "temperature", "favipiravir is effective for COVID-19", "EC 50 is 61.88 M", "clinical trials of favipiravir", "treatment of COVID-19", "antiviral drug arbidol", "nucleic acid positive-to-negative time", "Remdesivir(GS-5734)", "RdRp", "triphosphate form of remdesivir", "adenosine triphosphate", "inhibitory effects", "human and animal coronaviruses")
    keywords[3] = Array("serological tests", "target either IgG or IgM or both", "ELISA", "LFIA", "neutralization assays", "meta-analysis studies", "CLIA and FIA methods", "FIA", "nucleoside analog", "CLIA", "FIA")
    keywords[4] = Array("tiered diagnostic approach", "infections", "reduce disease spread", "diagnostic strategy", "rapid host immune response assay as a screening test", "molecular confirmatory testing", "rapid IgM/IgG testing", "benefit from quarantine/further testing", "information on population exposure", "herd immunity", "evaluate potential COVID-19 patients", "Triaging patients", "invasive swab", "response assay")
    keywords[5] = Array("transmission of the COVID-19", "respiratory droplets", "contact", "Vertical transmission", "infected person", "coughs", "sneezes", "close contact within 1 m", "respiratory symptoms", "SARS corona virus", "coronavirus can survive on plastered walls", "coronavirus can survive on stainless steel surfaces", "coronavirus can survive on", "coronavirus can survive on plastics", "coronavirus can survive on glass slides", "how long can coronavirus survive", "surfaces should be disinfected", "potential source of infection")
    keywords[6] = Array("characteristics of the virus", "standard protective measures", "mask", "masks", "N-95", "FFP2", "powered air-purifying respirator", "PAPR", "personal protective equipment", "PPE", "dedicated sterilization measures", "avoid the infection")
    keywords[7] = Array("angiotensin-converting enzyme inhibitor", "ACEI", "angiotensin II receptor blocker", "ARB", "standard protective measures", "increase attractiveness towards the COVID-19 virus infection", "antihypertensive medications", "increments in abundance of SARS-CoV-2 receptor", "SARS-CoV-2 receptor", "increase in ACE2 receptors on lung and heart cells", "entry points for SARS-CoV-2")
    keywords[8] = Array("outbreak of SARS-CoV-2", "pandemic", "significant mortality", "analyses of mortality", "disease severity", "clinical diagnosis", "inconclusive nucleic acid test", "compared between genders and among different age groups", "overall case fatality", "gender difference")
    keywords[9] = Array("severe infection", "serious effects", "heart disease", "cardiovascular disease", "CVD", "higher risk of severe symptoms", "pandemic", "acute myocardial damage", "myocarditis", "arrhythmias", "thromboembolic disease", "secondary cardiovascular effects", "decompensation of the underlying heart condition", "polypharmacy involving antipsychotic drugs", "antibiotics", "prolong the QT interval", "cardiotoxicities", "drug combinations")
    keywords[10] = Array("the incidence and types of adverse cardiovascular events associated with COVID-19", "Wuhan", "China", "arrhythmias", "acute cardiac injury", "high-sensitivty troponin I levels", "presence of cardiac injury", "occurring most frequently among older patients", "comorbidities", "associated with a more severe disease course", "acute kidney injury", "coagulation disorders", "without cardiac injury")
    keywords[11] = Array("novel coronavirus", "act on lymphocytes", "T lymphocytes", "Surveillance of NLR and lymphocyte subsets", "early screening of critical illness", "critical illness", "diagnosis and treatment of COVID-19", "treatment of COVID-19")
    keywords[12] = Array("symptoms", "COVID-19", "MERS-CoV", "mild flu", "fever", "cough", "difficulty in breathing", "pain in the muscles", "tiredness", "serious cases", "pneumonia", "acute respiratory distress syndrome", "tiredness", "sepsis", "septic shock")
    keywords[13] = Array("Results of the presented in silico analysis", "silico analysis", "newly emerging SARS-CoV-2 is highly related to SARS-CoV", "MERS-CoV and ACE2 is a likely receptor of it", "civets and poultry are potential candidates", "natural reservoir of the SARS-CoV-2", "human actin proteins possibly participate in attachment/internalization of SARS-CoV-2", "drugs which interact with actin proteins", "ibuprofen", "possible therapeutics for treatment of SARS-CoV-2 infection", "S1 protein from the SARS-CoV-2", "vaccine target")
    keywords[14] = Array("remdesivir treatment was effective against MERS-CoV and SARS-CoV infection", "remdesivir inhibited replication of SARS-CoV-2", "silico analysis", "Therapeutic remdesivir treatment", "clinical benefit in SARS-CoV-2-infected rhesus macaques")
    keywords[15] = Array("Peripheral inflammation caused by COVID-19", "long-term consequences", "leading to chronic medical conditions", "dementia", "neurodegenerative disease", "neuroinflammatory mechanisms", "unhealthy diet")
    keywords[16] = Array("Spike protein of SARS-CoV-2", "1273 amino acid long protein", "two functionally distinct regions", "SARS-CoV-2 entry in the host cell is mediated by proteolytic cleavage of its spike protein", "process dubbed as priming", "human Transmembrane Protease Serine 2", "TMPRSS2", "carry out the priming of the SARS-CoV-2 spike protein", "generating two distinct fragments of the viral spike protein, S1/S2 and S2")
    keywords[17] = Array("SARS-CoV-2 has characteristics typical of the coronavirus family", "SARS-CoV-2 characteristics", "classified in the lineage B betacoronaviruses", "severe acute respiratory syndrome", "SARS", "middle eastern respiratory syndrome", "MERS", "genome sequencing and phylogenetic analysis proved that the sequence of RNA genome of the virus is similar to bat coronaviruses", "genome sequencing", "bat", "bats", "primary source", "phylogenetic analysis", "genome sequencing", "sequence of RNA genome of the virus is similar to bat coronaviruses")
    keywords[18] = Array("COVID-19 produces a severe systemic inflammatory reaction", "increased free heme levels", "decreased levels of HO-1 activity", "functional hemoprotein", "spike protein of COVID-19 binds ACE-2 receptors and porphyrin molecules with weak and strong affinity", "Porphyrins are the building blocks of heme and allow COVID-19 access to invade cells along with ACE-2 receptors and bind functional hemoprotein within the cell", "Porphyrins are the building blocks of heme and allow COVID-19 access", "resulting COVID-porphyrin complex may lead to an impairment of HO-1 function", "upregulation of pro-inflammatory free heme and iron", "overwhelms the anti-inflammatory cytoprotection of HO-1")
    keywords[19] = Array("Forty-two missense mutations identified", "missense mutations", "major non-structural and structural proteins", "envelope protein")
    keywords[20] = Array("African American have been severely affected by COVID-19", "African American", "rising mortality rates within the African American community", "rising mortality rates", "Health disparities", "issues with systemic health access", "health inequities", "Health disparities", "pre-existing issues African American were subjected to within the southern states in the United States", "pre-existing issues African American")
    keywords[21] = Array("Key mental health outcomes", "mental health", "Post-Traumatic Stress Disorder symptoms", "PTSD", "severe depression", "anxiety", "insomnia", "perceived stress")
    keywords[22] = Array("Coronavirus Disease 2019", "virus", "outbreak of respiratory illness", "Wuhan,China", "COVID-19")
    keywords[23] = Array("weather and temperature affect the spread of COVID-19", "transmissibility", "severity", "flu", "common cold", "other features associated with COVID-19")
    keywords[24] = Array("types of HIV medicine", "lopinavir-ritonavir", "how to treat COVID-19", "clinical trialexternal icon", "does lopinavir-ritonavir speed up recovery", "reduce the amount of virus produced in patients hospitalized with COVID-19 and pneumonia")
    keywords[25] = Array("Serology testing", "detect previous infection", "antibodies to MERS-CoV", "exposed to the virus")
    keywords[26] = Array("spread mainly from person to person", "respiratory droplets", "infected person coughs or sneezes", "droplets can land in the mouths", "noses of people who are nearby", "possibly be inhaled into the lungs", "people are in close contact with one another", "close contact with 6 feet")
    keywords[27] = Array("CDC", "scientific evidence", "ACE-I", "ARBs", "risk of contracting", "severity of COVID-19")
    keywords[28] = Array("Diagnosis of COVID-19", "detection of SARS-CoV-2 RNA", "reverse transcription polymerase chain reaction", "Detection of SARS-CoV-2 viral RNA is better in nasopharynx samples", "Lower respiratory samples", "SARS-CoV-2 RNA has also been detected in stool", "Detection of SARS-CoV-2 RNA in blood", "marker of severe illness")
    keywords[29] = Array("Symptoms", "how long does it take for COVID symptoms to appear")
    keywords[30] = Array("HIV medicine", "lopinavir-ritonavir", "how to treat COVID-19")
    keywords[31] = Array("Remdesivir is an investigational antiviral drug", "in-vitro activity against SARS-CoV-2", "received intravenous remdesivir", "clinical trials or compassionate use", "treatment of children")
    keywords[32] = Array("Older adults and people", "serious underlying medical conditions", "higher risk for more severe complications from COVID-19", "complications from COVID-19")
    keywords[33] = Array("SARS-CoV2", "infected", "develop", "immunity")
    keywords[34] = Array("COVID-19", "Canada")
    keywords[35] = Array("social distancing", "impact", "slowing", "COVID-19")
    keywords[36] = Array("best masks", "preventing", "COVID-19")
    keywords[37] = Array("heart", "complications", "patients", "COVID-19")
    keywords[38] = Array("coronavirus", "differ", "seasonal", "flu")
    keywords[39] = Array("COVID-19", "cause", "inflammation")
    keywords[40] = Array("cytokine", "storm" , "related", "COVID-19")
    keywords[41] = Array("COVID-19", "impacted", "mental", "health")
    keywords[42] = Array("kinds", "tests", "COVID-19")
    keywords[43] = Array("Vitamins", "prevent", "COVID-19")
    keywords[44] = Array("complications", "COVID-19")
    keywords[45] = Array("COVID-19", "serious")
    keywords[46] = Array("adequate", "sleep", "prevent", "COVID-19")
    keywords[47] = Array("Which", "COVID-19", "vaccines", "effective", "safe")
    
    // Simple responses
    if (input == "hello" || input == "hi") {
        return "Hello there!";
    } else if (input == "goodbye" || input == "bye") {
        return "Talk to you later!";
    }
    else if ((input.length == 5) && (input.includes("cq") || input.includes("eq"))) {
        let retString = "";
        for (let i=0; i<json.length; i++) {
            if (json[i].q_id.toLowerCase() == input) {
                retString += "<b>Question ID: </b>"+json[i].q_id+"<br><b>Question Text: </b>"+json[i].q_text+"<br><i><b>Answer Text: </b>"+json[i].answer_text+"</i>";
            }
        }
        if (retString == "") {
            return "We dont have this question try asking something else!";
        }
        return retString;
    }
    else {
        var flag = false;
        var tempAns = [];

        for (let i=0; i<keywords.length; i++) {
            console.log("i: " + i)
            for (let j=0; j<keywords[i].length; j++) {
                if (input.toLowerCase().replace(/[^a-zA-Z0-9]/g, " ").includes(keywords[i][j].toLowerCase().replace(/[^a-zA-Z0-9]/g, " ")) || keywords[i][j].toLowerCase().replace(/[^a-zA-Z0-9]/g, " ").includes(input.toLowerCase().replace(/[^a-zA-Z0-9]/g, " "))) {
                    flag = true;
                    tempAns.push(i);
                    break
                }
                else {
                    continue
                }
            }
        }
        let tempAnsUnique = [...new Set(tempAns)];
        if (flag == true) {
            let retString = "Here are the information that we have related to <b><i>\"" + input + "\"</b></i>.<br>Please type in the Question ID that you are interested in into the chat to view the full answer to the question.<br><br>";
            for (let i=0; i<tempAnsUnique.length; i++) {
                retString+="<b>Question ID: </b>"+json[tempAnsUnique[i]].q_id+"<br><b>Question Text: </b>"+json[tempAnsUnique[i]].q_text+"<br><br>";
            }
            return retString;
        }
        else {
            return "We dont have this question try asking something else!";
        }
    }
}