---
title: Conversations with Wikipedia (Research Paper)
description: My research paper exploring the experience of conversational education.
date: '2018-05-28T04:48:30.222Z'
categories: []
keywords: []
slug: /conversations-with-wikipedia-research-paper
cover: 'https://cdn-images-1.medium.com/max/800/0*P4re_2qMolHcE0up.png'
---

![](https://cdn-images-1.medium.com/max/800/0*P4re_2qMolHcE0up.png)

**Abstract.** Asking a peer to explain a concept is a simple example of learner-initiated conversation and an effective learning technique, but it is difficult to automate for many different users and topics. Research on conversational agents generally keeps to conversations of a more specific domain. In this paper, a learner-initiated conversational agent is introduced; it can converse with many users (one at a time) and is capable of discussing many topics. This poster presents this agent’s development with a specific focus on using conversational practices to help support informal learning experiences. The agent uses Wikipedia as a first step in the development of a flexible and mobile conversation-based learning experience.

> Arjun Kalburgi and Carrie Demmans Epp  
> University of Alberta, Edmonton AB T6G 2R3, Canada  
> {kalburgi, cdmmansepp}@ualberta.ca

> **Keywords:** E-learning, Conversational Agent, Wikipedia, Self-directed learning, Mobile learning, Informal learning.

#### 1. Introduction and Motivation

Asking a peer to explain a concept is a simple example of a learner-initiated conversation that occurs naturally. This type of learning relies on a peer to have sufficient knowledge of the topic, which is not always the case. Automating the conversation means understanding the user’s goal and the user’s requested topic, for any user and any topic. The ultimate goal of this project is to create an automated educational experience that is useful and context-dependent, just like that of conversing with a peer.

Existing agents create and research experiences modelled after conversing with a tutor (Nye and Graesser and Hu, 2014). These agents are designed to help users with specific knowledge areas and under specific circumstances, but utilize concepts of dialog, interaction and natural language understanding (NLU) ([Katz and Albacete, 2013](http://psycnet.apa.org/record/2013-31546-001)) that are applicable to any agent.

The project builds a prototype e-learning agent that attempts to explore the requirements of the desired experience. The prototype is built as a command line interface (CLI) and focuses specifically on the context and dialogue of the conversational experience. Content is supplied to the agent from Wikipedia so that a large number of topics can be covered.

#### 2. Existing Conversational E-Learning Agents

Conversational agents are still far from achieving human-like dialogue ([Thomason and Litman](http://aclweb.org/anthology/N/N13/N13-1098.pdf), 2013) despite researchers actively pursuing this goal. Dialog has been used to simulate the highly interactive nature of human tutoring ([Katz and Albacete, 2013](http://psycnet.apa.org/record/2013-31546-001)), in specific domains where the conversational agent or tutoring system control most of the learning experience. However, it has been shown that there is no one size fits all language model to be used for such tutoring ([Katz and Jordan and Albacete, 2016](https://ieeexplore.ieee.org/document/7756915/)). Conversational agents that help students learn by holding a conversation in natural language (Nye and Graesser and Hu, 2014) have been explored but conversations that are student-initiated have not. Existing agents ask students to explain topics, this project has the agent explaining topics from Wikipedia so the user can ask further questions.

#### 3. E-learning Dialog Development

A conversational prototype was built from an iterative, design-based research perspective. The prototype features three parts: prompting, briefly summarizing, and conversing with the user.

#### 3.1. Building Context using Wikipedia

The system needs to understand the goals of the user to have an appropriate conversation. These goals are the user’s context.

Wikipedia offered an approach to building this context with its large MediaWiki topology and consistently structured entries. Narrowing and filtering of information to satisfy the learner’s goals can be done by traversing the topology and scanning through the entries.

Both depth-first (i.e., choosing a Wikipedia page and exploring its content) and breadth-first (i.e., viewing the Wikipedia page in the topology, as it connects to other pages) explorations of the Wikipedia knowledge base were considered. To decide between these approaches, we conducted exploratory user evaluations.

**Initial Testing.** The prompt, “what would you like to learn”, was used to start a discussion and observe the type of knowledge the discussion centered around. Centering around a specific topic signified depth-first interest, and centering around relations between topics signified breadth-first interest. A few college students were briefly asked the prompting question at a hackathon. The discussions displayed depth-first interest, thus the project continued using depth-first conversation.

#### 3.2. Creating the Agent with the Wikipedia API

Wikipedia API libraries were used to retrieve the information and metadata from a Wikipedia page for the agent to use. A search query helped identify a Wikipedia topic for the learner and a nested list implementation of a page’s sections and subsections was useful in leading the conversation to more specific information.

Although conversations at this stage were possible, the text retrieved from the sections is too large and lacked conversational flow. To improve the conversation, the text needed to be summarized.

#### 3.3. Creating Natural Conversation with the PyTeaser API

Interviews were conducted to better understand how the agent should create summaries and handle questions the learner may have afterwards. These 10 interviews were modelled after the existing prototype and were performed on college students.

**Extractive query focused summaries.** Interviewers would summarize large text blocks using the visual and vocal feedback they received to ensure the conversation remained relevant to the interviewee. This model is called a query-focused summary.

The PyTeaser API was used to provide this type of summary in the prototype. The query was set to the subtopic title itself. This helped to create smaller, focused responses by the agent. However, like many other extractive summarization algorithms ([Ceylan and Mihalcea and Ozertem and Lloret and Palomar, 2010](http://wing.comp.nus.edu.sg/~antho/N/N10/N10-1133.pdf)), PyTeaser’s results were often too long for them to be appropriate responses.

**Post-summary follow-up questions.** During the interviews, follow-up questions were asked to help learners accomplish their learning goal.

This follow-up questioning was added to the agent after the summarization stage. Once the learner replies with his/her question, the agent responds by re-summarizing the topic, using keywords from the question as the query. Unfortunately the summarization again relied on PyTeaser, possibly bringing more confusion than help.

#### 3.4. Improving Conversation

**Using Concepts from Summarization.** The agent can use NLU techniques to find keywords and concepts to help build a summary, similar to what the interviewer would do. The agent uses the IBM Watson NLU API (Watson) to retrieve concepts from the user’s response to help provide more data to the query focused summarizer.

**Nested Subtopic Summarization.** Interviewers would include subsection headers when summarizing subtopics that had their own subsections. This helped interviewers build more context as to where the conversation should go. To replicate this within the agent, an additional summarization function was made using the same technique from Watson.

**Open-Ended Questioning Upon Exit.** If interviewers felt that they had failed to deliver the information the participating learner was seeking, they would simply ask if that was the case. This sparked another conversational flow for the interviewer to try to accomplish the learner’s goal.

As this usually happened after the learner motioned for the interview to end, the agent asks similar questions at the end of the experience.

#### 4\. Next Steps

There were many possible paths the prototype could take to further explore the potential for learner-initiated conversational agents.

The two APIs, PyTeaser and Watson, did not solve the original problem in most cases. Output could still be too long and lack conversational flow. Although the use of PyTeaser and Watson was serviceable for this stage of the prototype, both need to use context better to support real learning conversations.

Additionally, the project would benefit from being able to distinguish between conversations that meet or failed to meet the user’s learning goal. This type of metric would provide data that can be analyzed to improve the agent.

#### **5\. Conclusion**

The prototype agent built shows the potential for learner-initiated conversations that are relevant and knowledgeable. Interviews helped establish the dialog and content of these conversations while NLU techniques helped were used to enable agent-learner conversation.

This exploration has the potential to be expanded on. The agent built is currently only able to discuss topics at a high level, but developing context-dependent summarization and more finely-tuned dialog would continue the exploration into deeper educational discussion.

#### **References**

1.  Hakan Ceylan, Rada Mihalcea, Umut Ozertem, Elena Lloret, and Manuel Palomar. 2010. Quantifying the limits and success of extractive summarization systems across domains. In _Human Language Technologies: The 2010 Annual Conference of the North American Chapter of the Association for Computational Linguistics_, pages 903–911, Los Angeles, California.
2.  Katz, S., & Albacete, P. L. (2013). A tutoring system that simulates the highly interactive nature of human tutoring. _Journal of Educational Psychology_, pages 105(4), 1126–1141.
3.  J. Thomason and D. Litman, “Differences in User Responses to a Wizard-of-Oz versus Automated System,” _Proc. North American Chapter Assoc. Computational Linguistics: Human Language Technologies_ (NAACL-HLT 13), 2013, pages. 796–801.
4.  S. Katz, P. Jordan & P. Albacete. Exploring How to Adaptively Apply Tutorial Dialogue Tactics. _In Proceedings of the 16th IEEE International Conference on Advanced Learning Technologies._ (ICALT2016), 2016.
5.  Nye, B. D., Graesser, A. C., & Hu, X. (2014). AutoTutor and Family: A Review of 17 Years of Natural Language Tutoring. _International Journal of Artificial Intelligence in Education_, _24_(4), 427–469. [http://doi.org/10.1007/s40593-014-0029-5](http://doi.org/10.1007/s40593-014-0029-5)
