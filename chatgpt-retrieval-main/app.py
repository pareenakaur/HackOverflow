# Bring in deps
import os 
from apikey import apikey 

import streamlit as st 
from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain, SequentialChain 
from langchain.memory import ConversationBufferMemory
from langchain.utilities import WikipediaAPIWrapper 

os.environ['OPENAI_API_KEY'] = apikey

# App framework
st.title('🦜🔗 YouTube GPT Creator')
prompt = st.text_input('Plug in your prompt here') 


# Prompt templates
input_template = PromptTemplate(
    input_variables = ['event', 'portfolio'], 
    template='Your task is to write a financial risk analysis of how {event} affects the risk rating of a portfolio with asset weightages of {portfolio}.'
)

script_template = PromptTemplate(
    input_variables = ['wikipedia_research'], 
    template='Using the following wikipedia research:{wikipedia_research}'
)


# Memory 
title_memory = ConversationBufferMemory(input_key='raw_input', memory_key='chat_history')
script_memory = ConversationBufferMemory(input_key='wikipedia_research', memory_key='chat_history')

# Llms
llm = OpenAI(temperature=0.9) 
input_chain = LLMChain(llm=llm, prompt=input_template, verbose=True, output_key='event')
output_chain = LLMChain(llm=llm, prompt=script_template, verbose=True, output_key='script')

wiki = WikipediaAPIWrapper()

# Show stuff to the screen if there's a prompt
portfolio = 'Apple: 60%, Google: 40%'
if prompt:
    event = input_chain.run(event=prompt, portfolio = portfolio)
    wiki_research = wiki.run(prompt)
    script_output = output_chain.run(event=event, wikipedia_research=wiki_research)

    st.write(event)
    st.write(script_output) 

    with st.expander('Title History'): 
        st.info(title_memory.buffer)

    with st.expander('Script History'): 
        st.info(script_memory.buffer)

    with st.expander('Wikipedia Research'): 
        st.info(wiki_research)
