const API_URL = "http://localhost:5174/content";

/**
 * Fetch the content from the api
 * In case of an error, return content as "<speak><s>There was an error</s></speak>"
 */
const fetchContent = async (url = API_URL): Promise<string> => {
    return fetch(url).then(content => {
        return content.json() 
    }).catch(err => {
        console.log(`Error in fetching content - ${err.message}`)

        return '<speak><s>There was an error</s></speak>'
    })
};

/**
 * Parse the content into sentences, and return an array of sentences. Look at the Readme for sample input and expected output.
 * Avoid using DOMParser for implementing this function.
 */
const parseContentIntoSentences = (content: string) => {
    let intialSplit = content.split('<')
    
    let parsedContentArray: string[] = []

    intialSplit.forEach(element => {
        let splicedContent = ''
        let closingTagIndex = element.indexOf('>')
        if(closingTagIndex != -1) {
            splicedContent = element.slice(closingTagIndex+1,element.length)
        }

        if(splicedContent.length) parsedContentArray.push(splicedContent)
    });

    return parsedContentArray

};

export { fetchContent, parseContentIntoSentences };
